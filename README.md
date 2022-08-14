# CodePush-poc

Summary for Android

- Install dependencies for AppCenter + codepush
- Use appcenter-cli to login and get tokens
`appcenter login`
`appcenter codepush deployment list -a <USER_NAME>/<PROJECT_NAME> -k`
- Add app deployment key on `android/app/src/main/res/values/strings.xml` of android
- Change `android/settings.gradle`
- Add secret on file `android/app/src/main/assets/appcenter-config.json`
- Change MainApplication.java to getJSBundle in the way codepush expects to start.
- Run build and publish new version
> `appcenter codepush release-react -a bruno.haetinger-hotmail.com/CodePush-poc -d Staging`
- Access AppCenter dashboard to select codepush version
