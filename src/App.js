import { Box } from "rebass";
import Header from "./components/header";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle, theme } from "./theme";
import TodoList from "./components/todo-list";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer autoClose={3000} />
      <Box
        minWidth="100vw"
        minHeight="100vh"
        width={1}
        css={{
          background: "#eea29a",
        }}
      >
        <GlobalStyle />
        <Header />
        <Box maxWidth={1000} px={20} width={1} m="0 auto">
          <TodoList />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
