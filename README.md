# News App

A React Native application for displaying news articles using Expo.

## Setup

1. Clone the repository:
   ```
   git clone <repository-url>
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
3. Pull to Refresh: Allows users to refresh the news feed by pulling down the list.
4. Article Pinning: Users can pin articles to the top of the list by swiping left to right.
5. Article Deletion: Users can delete articles from the list by swiping right to left.
6. Swipe Actions:
   - Left to Right: Pin article to top
   - Right to Left: Delete article
7. Responsive Design: Adapts to different screen sizes and orientations.

## Assumptions

1. API: The project assumes the use of a news API (likely NewsAPI) for fetching articles.
2. Authentication: No user authentication is implemented; it's assumed to be a public news feed.
3. Data Persistence: Article pinning and deletion are not persisted across app restarts.
4. Error Handling: Basic error handling is implemented, but comprehensive error states are not fully developed.
5. Performance: The app is optimized for performance with features like memo and useCallback, assuming a potentially large number of articles.
6. Styling: The app uses a custom theming system, assuming potential future dark mode support.
7. Platform: While cross-platform, the app is primarily designed for mobile devices (iOS and Android).

## Project Structure

- `app/`: Contains the main application code and routing.
- `components/`: Reusable React components.
- `screens/`: Individual screen components.
- `constants/`: Constant values used throughout the app.
- `types/`: TypeScript type definitions.
- `utils/`: Utility functions and helpers.

## Key Components

1. NewsFeed: Main component for displaying the list of articles.
   ```typescript:screens/news-feed/index.tsx
   startLine: 1
   endLine: 141
   ```

2. NewsCard: Component for rendering individual news articles.
   ```typescript:components/news-card/index.tsx
   startLine: 1
   endLine: 69
   ```

3. API Integration: Handles fetching news data from the API.
   ```typescript:screens/news-feed/api.ts
   startLine: 1
   endLine: 29
   ```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
