
# FlickPick

FlickPick is a comprehensive movies and TV shows library created for our DEPI final project. It allows users to browse, search, and explore a wide range of content from movies and TV shows to favorite lists and search history.

## Project Description

FlickPick is designed to provide an intuitive and seamless experience for users to discover and manage their favorite movies and TV shows. With features like search history and a personalized favorites list, users can easily keep track of what they love. This project utilizes data from TMDB to fetch movie and TV show details.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT), bcryptjs
- **Libraries**:
  - react-hot-toast
  - lucide-react
  - React Player
  - axios
  - react-router-dom
  - zustand
  - mongoose
  - cookie-parser
  - dotenv
  - bcryptjs

## Features

- **Movie, Person, and TV Show Display & Search**: Users can explore a vast database of movies, TV shows, and actors.
- **Search History**: Keeps track of users' previous searches for easy reference.
- **Favorites List**: Allows users to create a personalized list of their favorite movies and TV shows.

## Installation and Setup

To get a local copy up and running, follow these simple steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmedabdulnasser/depi-final-proj.git
   ```

2. Navigate to the project directory:
   ```bash
   cd depi-final-proj
   ```

3. Install the dependencies for both the client and server:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and configure the following environment variables:
   ```bash
   MONGO_URI=<Your MongoDB connection string>
   JWT_SECRET=<Your secret key for JWT>
   TMDB_API_KEY=<Your TMDB API key>
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

Once the server is running, you can access FlickPick in your browser by navigating to `http://localhost:5173`. You can browse movies and TV shows, search for specific content, add items to your favorites, and view your search history.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

- [Ahmed Abdel-Nasser](https://github.com/ahmedabdulnasser) - [LinkedIn](https://www.linkedin.com/in/ahmedabdulnasser/)
- [Ahmed Yousri](https://github.com/ahmed-u3) - [LinkedIn](https://www.linkedin.com/in/ahmad-yousri/)
- [Abdelrahman Adel](https://github.com/Abdelrahman1625) - [LinkedIn](https://www.linkedin.com/in/abdelrahman-adel-0a1o234567/)
- [Mazen Hassan](https://github.com/MazenHassan10) - [LinkedIn](https://www.linkedin.com/in/mazen-hassan-662264259/)
- [Youssef El-Laban](https://github.com/yusefellban) - [LinkedIn](https://www.linkedin.com/in/youssef-ellban/)

## Contact

If you have any questions or feedback, feel free to reach out to any of the authors through their GitHub or LinkedIn profiles.
