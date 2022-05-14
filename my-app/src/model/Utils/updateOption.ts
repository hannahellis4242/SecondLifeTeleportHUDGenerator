import Menu from "../Menu";
import Option from "../Option";

const findMenuWithId = (menu: Menu, id: string): Menu | null => {
  if (menu.id === id) {
    return menu;
  }
  const subMenu: Menu | undefined = menu.options
    .map(({ action }) => action.menu)
    .find((child) => (child ? findMenuWithId(child, id) : false));
  return subMenu ? subMenu : null;
};

export const updateOption = (
  current: Menu,
  menuId: string,
  optionId: string,
  updatedOption: Option
) => {
  const menuWithGivenId = findMenuWithId(current, menuId);
  if (menuWithGivenId) {
    const [newOptions, newOptionsAreDifferentToOriginal] =
      menuWithGivenId.options
        .map((option): [Option, boolean] =>
          option.id === optionId ? [updatedOption, true] : [option, false]
        )
        .reduce<[Option[], boolean]>(
          ([options, success], [option, updated]) => [
            options.concat([option]),
            success || updated,
          ],
          [[], false]
        );
    if (newOptionsAreDifferentToOriginal) {
      menuWithGivenId.options = newOptions;
      return { result: current, success: true };
    }
  }
  return { result: current, success: false };
};
