# CodePush-poc

- Add keys on strings.xml of android
- change android/settings.gradle
- install dependencies for AppCenter + codepush
- Use appcenter-cli to login and get tokens
- Change MainApplication.java to getJSBundle in the way codepush expects to start.
- Run build and publish new version
> `appcenter codepush release-react -a bruno.haetinger-hotmail.com/CodePush-poc -d Staging`
- Access AppCenter dashboard to select codepush version
