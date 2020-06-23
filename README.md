
# React-native-movie-app # 🚀

*A mobile application built using React Native, Redux, Redux-thunk, React-navigation 5,[react-native-shared-element](https://github.com/IjzerenHein/react-native-shared-element "react-native-shared-element"), react-native-fbsdk, google-signin and used [TMDB](https://www.themoviedb.org/documentation/api "TMDB") Api* 


## Demo

![demo](https://user-images.githubusercontent.com/32233870/85402207-f11fbc00-b563-11ea-93f7-c523843d6a18.gif)

# Installation

### OS

In the root directory

-   Install dependencies:  `npm i`

In the  `ios`  directory

-   Install Pods:  `gem install cocoapods`
-   Install Pods:  `pod install`
-   Install xcpretty:  `gem install xcpretty`
-   Launch:  `open Sample.xcworkspace`

### Android

-   You might need to do this to run it in Android Studio or on real device:  `adb reverse tcp:8081 tcp:8081`
-   And for the sample server:  `adb reverse tcp:3000 tcp:3000`
-   To run from command line try:  `react-native run-android`or `npx react-native run-android`

## Todo

 - [ ] Fix the Google signin login
 - [ ] Refactor the midellware to redux-saga
 
 
 
 - [ ] Bug fixes and perfomance improvements
 - [ ] Imorove the UX  & UI
