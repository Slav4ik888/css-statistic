// import * as React from 'react';
// import { TextfieldItem } from '..';
// import { render, screen, fireEvent, renderHook } from '@testing-library/react';
// import { useGroup } from '../../../../../../utils/hooks';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { themes } from '../../../../../../utils/styles';

// const theme = createTheme(themes);


// const MockGroupItem = {
//   id    : `id123`,
//   field : `Some field`
// };


// describe(`TextfieldItem`, () => {
//   it(`Placeholder right show`, () => {
//     const { result } = renderHook(() => useGroup(false, MockGroupItem));

//     render(
//       <ThemeProvider theme={theme}>
//         <TextfieldItem  
//           group       = {result.current}
//           scheme      = 'field'
//           label       = 'Some label'
//           placeholder = 'Some placeholder'
//         />
//       </ThemeProvider>
//     );

//     expect(screen.getByPlaceholderText('Some placeholder')).toBeInTheDocument();
//   })
// });

// // npm run test textfield-item.test.tsx
