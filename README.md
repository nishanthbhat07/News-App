# News App

A React Native application for displaying news articles using Expo.

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/nishanthbhat07/News-App.git
   cd news_app
   ```

2. Install dependencies:
   ```
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   EXPO_PUBLIC_API_URL=<your-news-api-url>
   EXPO_PUBLIC_API_KEY=<your-news-api-key>
   ```

4. Start the development server:
   ```
   yarn start
   ```

5. Run on your preferred platform:
   - iOS: Press 'i' in the terminal or run `yarn ios`
   - Android: Press 'a' in the terminal or run `yarn android`
   - Web: Press 'w' in the terminal or run `yarn web`

## Features

1. News Feed: Displays a list of news articles with images, titles, and publication details.
2. Infinite Scroll: Loads more articles as the user scrolls down the list.
3. Article Pinning: Users can pin articles to the top of the list by swiping left to right.
4. Article Deletion: Users can delete articles from the list by swiping right to left.
5. Swipe Actions:
   - Left to Right: Pin article to top
   - Right to Left: Delete article
6. Responsive Design: Adapts to different screen sizes and orientations.

## Assumptions

1. API: The project assumes the use of a news API (likely NewsAPI) for fetching articles.
2. Authentication: No user authentication is implemented; it's assumed to be a public news feed.
3. Data Persistence: Article pinning and deletion are not persisted across app restarts.
4. Performance: The app is optimized for performance with features like memo and useCallback, assuming a potentially large number of articles.
5. Styling: The app uses a custom theming system, assuming potential future dark mode support.
6. Platform: While cross-platform, the app is primarily designed for mobile devices (iOS and Android).

## Key Packages

1. React Query: Used for fetching and managing news article data.
   - Benefits:
     - Efficient caching of news articles
     - Easy implementation of infinite scroll for the news feed
     - Automatic background refetching for fresh content

2. MMKV: Utilized for storing pinned articles and user preferences.
   - Benefits:
     - Fast, synchronous operations for smooth user experience
     - Persistent storage of pinned articles across app restarts

3. Reanimated: Powers smooth animations for swipe actions and transitions.
   - Benefits:
     - Fluid, native-driven animations for article swiping
     - Improved performance for list item animations

4. Gesture Handler: Manages swipe gestures for article pinning and deletion.
   - Benefits:
     - Responsive and intuitive swipe interactions
     - Seamless integration with Reanimated for gesture-driven animations

## Project Structure

- `app/`: Contains the main application code and routing.
- `components/`: Reusable React components.
- `screens/`: Individual screen components.
- `constants/`: Constant values used throughout the app.
- `types/`: TypeScript type definitions.
- `utils/`: Utility functions and helpers.

## Key Components

1. NewsFeed: Main component for displaying the list of articles.
   ```typescript
   screens/news-feed/index.tsx
   ```

2. NewsCard: Component for rendering individual news articles.
   ```typescript:
   components/news-card/index.tsx
   ```

3. API Integration: Handles fetching news data from the API.
   ```typescript
   screens/news-feed/api.ts
   ```

## Demo
- [IOS](https://drive.google.com/file/d/1JmfuxBjMdwM13V9BqZAXe7VePhVUNVv5/view?usp=sharing)
- [Android](https://drive.google.com/file/d/12krY_EUyPjF5H75mjnI0T2DqfLRPULC7/view?usp=sharing)
- [Android APK](https://drive.google.com/file/d/13AALL_0SV4gqjgTQ-vnXEWaLVG_wfE_0/view?usp=sharing)


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
