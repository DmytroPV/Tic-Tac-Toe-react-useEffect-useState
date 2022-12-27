## Tic-Tac-Toe-Game-using-React-Hooks
#### using in the project - react hooks useState, useEffect, styled-components

- useEffect: another implementation option can be to transfer to separate functions (setCellset(color), setCounter, setCross_zero(winners_move)) with useEffect and include them in useCallback, or create a new state with an object of the values of the winning indices and the value of cell[а] and use the dependencies in these functions. this way we would get a simple useEffect, also in the case of deriving functions from useEffect, you can create one state object for the points counter.
- Keys: Here, indices are used as keys because this list (array) is not dynamic. In other projects where the size may change or sorting will occur, you need to use "id" for keys.
- Styles: the project uses styled-components. Since this is a simple project, no font downloads were used here. The css reset file is not used. Colors and fonts were not separated into separate files.
- Common file: most developers divide components into smaller ones. It would also be possible to divide it into several components, but then you need to use props often, which can be somewhat confusing for beginners. Since this is not a big project, it seems to me that in one component you can more clearly understand the logic of the code. Of course, in teams and more serious projects, it is not necessary to write large components.

![Tic tac toe react](https://user-images.githubusercontent.com/119622477/209564626-99099c56-c407-46ef-ac71-d364fd052692.png)

