# Vehicle Models Fetcher

A React Next.js application to fetch and display vehicle models based on make and year. This project uses the NHTSA API to retrieve vehicle information.

## Table of Contents

- [Technologies Used](#technologies-used)
- [How to Use](#how-to-use)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building web applications.
- [TypeScript](https://www.typescriptlang.org/) - A language that adds static typing to JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) - A CSS framework for responsive and modern design.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vehicle-models-fetcher.git

2. Navigate to the project directory:
    ```bash
    cd vehicle-models-fetcher

3. Install the dependencies:
    ```bash
    npm install

4. Start the development server:

    ```bash
    npm run dev
5. Acesse o aplicativo em http://localhost:3000.

## Estrutura do Projeto
    /vehicle-models-fetcher
    ├── /app
    │   ├── /filter
    │   │   ├── index.tsx
    │   │   │
    │   ├── /result
    │   │   ├── /[makeId]
    │   │   │   └── /[year].tsx  # Results page for a specific model
    │   └── /components
    │       ├── Loading.tsx      # Loading component
    │       ├── Error.tsx        # Error component
    │       └── ModelsList.tsx   # Component to list vehicle models
    |
    ├── package.json
    └── README.md

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.