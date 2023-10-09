# react-typescript-starter
Starter template for running react typescript webpack code
## Simple word game
This is simple word game implemented using React along with typescript using webpack as module bundler.
We are using React context for state management
## What is this game
You have a word thats generated randomly which is hidden. You have a display of all alphabets. Selecting an alphabet will reveal a letter in the hidden word if the letter clicked is part of the word.

We have word game folder under which we have  components for the game
src/
---wordgame/
-----App.tsx
-----WordDisplay.tsx
-----AppState.ts
-----LettersList.tsx
-----modal.tsx
-----Points.tsx
-----AppContext.tsx

1. App.tsx --> It just renders the whole game
2. WordDisplay.tsx --> display the hidden random word.
3. AppState.ts --> general word game state an interface
4. modal.tsx ---> Just to display message 
5. Points.tsx ---> Display score for the game
6. AppContext ---> It creates context and return context provider as a component.
            It exposes 2 methods and app state
                1. onLetterClicked
                2. restartGame
                3. appState

Flow

LetterList -->calls letterclicked on AppContext --> which updates the state based on logic
Rerenders related components
When all words are revealed a message shown to the user

The whole state logic is separated in to context files

