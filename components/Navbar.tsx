import {ReactElement, cloneElement} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

interface Props {
  children: ReactElement;
}

function ElevationAppBar(props: Props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = () => {
  return (
    <ElevationAppBar >
      <AppBar position="fixed" color="secondary">
				<Toolbar />
			</AppBar>
    </ElevationAppBar>
  );
};

export default Navbar;
