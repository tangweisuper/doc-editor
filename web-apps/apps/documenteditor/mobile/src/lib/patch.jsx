
const EditorUIController = () => {
    return null
};

EditorUIController.isSupportEditFeature = () => {
    return true
};

EditorUIController.getToolbarOptions = () => {
    return null
};

EditorUIController.initFonts = () => null;
EditorUIController.initEditorStyles = () => null;
EditorUIController.initFocusObjects = () => null;
EditorUIController.initTableTemplates = () => null;
EditorUIController.ContextMenu = {
    mapMenuItems: () => [],
    handleMenuItemClick: () => true,
};

export default EditorUIController;
