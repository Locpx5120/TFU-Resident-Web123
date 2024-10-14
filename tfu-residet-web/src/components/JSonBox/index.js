import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const JSonBox = forwardRef(
  ({ variant = "contained", bgColor, color, opacity, borderRadius, shadow, ...rest }, ref) => (
    <Box
      ref={ref}
      sx={{
        opacity,
        background: bgColor,
        color: color,
        borderRadius: borderRadius,
        boxShadow: shadow,
        ...(variant === "contained" && {
          backgroundColor: bgColor,
        }),
        ...(variant === "gradient" && {
          background: `linear-gradient(195deg, ${bgColor}, ${color})`,
        }),
      }}
      {...rest}
    />
  )
);

JSonBox.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
};

export default JSonBox;