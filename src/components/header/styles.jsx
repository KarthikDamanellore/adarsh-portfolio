export const headerContainerStyles = {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    justifyContent: "space-between",
    padding: "24px",
    alignItems: "center",
};
export const avartarStyles = {
    cursor: "pointer",
};
export const popOverStyles = {
    maxWidth: "100%",
    width: "300px",
    padding: "10px",

    "@media screen and (max-width:510px)": {
        width: "260px",
    },
};
export const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 500,
    width: "100%",
    bgcolor: "background.paper",
    border: "2px solid #fff",
    borderRadius: "4px",
    boxShadow: 24,
    p: 4,
};
