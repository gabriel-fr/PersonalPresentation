import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Index from "src/components/pages";
import muiTheme from "src/theme/muiTheme";

export default function Home() {
  return  <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Index/>
    </ThemeProvider>;
}
