# autoInsta
# Instagram Automation README

This project provides a set of utilities for interacting with Instagram and other online platforms to automate specific tasks.

## Features:
- Automatic Instagram session handling (login, save, load).
- Fetch and post images/videos from Reddit.
- Automate following Instagram users.
- Video and audio downloading and merging.
- Task scheduling using cron.
- Censorship utility for certain words in posts.
- A built-in HTTP server to keep the app running.

## Dependencies:

- `instagram-private-api`
- `node-cron`
- `fs`
- `http`, `https`
- `axios`
- `node-fetch`
- `child_process`
- `mpd-parser`
- `path`
- `fluent-ffmpeg`
- ...and others mentioned in the code.

## How to use:

1. Clone the repository.
2. Run `npm install` to install the required dependencies.
3. Ensure you have your Instagram credentials, Reddit API credentials, and other necessary configurations set.
4. In the provided code, replace `'PASSWORD'` with your actual Instagram password.
5. Adjust the cron schedule as needed.
6. Start the application.

## Note:

- **Security**: Storing passwords directly in the source code is not secure. Use environment variables or other means to store sensitive data securely.
- The provided script fetches content from Reddit. Ensure you comply with both Instagram and Reddit terms of service.
- Some functionality has been commented out and might need adjustments or refactoring.
- The code might need refactoring for better organization and clarity.
- Always test the automation on a dummy account before using it on a main account to prevent any unexpected bans or issues.

## Apologies:

Sorry for the messiness of the code. It's recommended to refactor and organize the modules and functionalities to enhance maintainability and readability.

---

Happy automating!
