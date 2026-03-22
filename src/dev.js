// Hash function.
export function hashString(str) {
    try {
        let h1 = 0xdeadbeef ^ str.length;
        let h2 = 0x41c6ce57 ^ str.length;
        for (let i = 0; i < str.length; i++) {
            const ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
            Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
            Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return (
            (h2 >>> 0).toString(16).padStart(8, "0") +
            (h1 >>> 0).toString(16).padStart(8, "0")
        );
    } catch {
        return null;
    }
}

// Core blocker.
export function omegaIota(args = {}) {
    // Default values.
    const {
        htmlData = `
          <head>
            <title>Blocked</title>
            <style>
              body {
                margin: 0;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #1e1e2f, #2c2c54);
                color: white;
                font-family: Arial, sans-serif;
                text-align: center;
              }

              .container {
                background: rgba(255,255,255,0.05);
                padding: 50px;
                border-radius: 20px;
                box-shadow: 0 0 40px rgba(0,0,0,0.6);
                animation: fadeIn 0.5s ease-in-out;
                width: 600px;
              }

              .icon {
                margin-bottom: 20px;
                display: flex;
                justify-content: center;
              }

              .icon img {
                display: block;
                margin: 0 auto;
                width: 500px;
                border-radius: 1000px
              }

              h1 {
                font-size: 36px;
                margin-bottom: 10px;
              }

              p {
                opacity: 0.7;
              }

              @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="icon"><img src="https://raw-githubusercontent-com.translate.goog/MohanIShim47/Scriptix/main/src/img/block.png" /></div>
              <h1>Scriptix Has Blocked You</h1>
              <p>
              Sorry, but you entered the worng passcode. If you are a student just try again or ask me, it might be a error. 
              Also you may experience having tried to many passcode in which just contact me if you're a student. Oh, and for 
              the ones who aren't a student, I wish you good luck on trying to get out of this.
              </p>
            </div>
          </body>`,
        matchUserAgent = /Mac/i,
        blockList = false,
        passwordHash = null,
        passwordPopupText = "Please enter bypass code:",
        passwordStore = null,
        passwordStoreHash = false,
        requireAll = false
    } = args;

    // Logic combination.
    const combine = requireAll
        ? (a, b) => a && b
        : (a, b) => a || b;

    // Starting state.
    let verified = requireAll;

    // User agent check.
    if (matchUserAgent) {
        const ua = navigator.userAgent;
        const matched = blockList
            ? !matchUserAgent.test(ua)
            : matchUserAgent.test(ua);
        verified = combine(verified, matched);
    }

    // Password check.
    if (passwordHash) {
        const userInput = prompt(passwordPopupText);
        const hashedMatch = passwordHash === hashString(userInput);
        let storedValid = false;
        if (passwordStore) {
            const stored = localStorage.getItem(passwordStore);
            storedValid = passwordStoreHash
                ? stored === passwordHash
                : !!stored;
        }
        verified = combine(verified, hashedMatch || storedValid);

        // Save successful authorization.
        if (passwordStore && verified) {
            localStorage.setItem(
                passwordStore,
                passwordStoreHash ? hashString(userInput) : "1"
            );
        }
    }

    // Final result.
    if (verified) { return true; }
    else {
        document.open();
        document.write(htmlData);
        document.close();
        throw "SCRIPTIX-BLOCKED";
    }
}