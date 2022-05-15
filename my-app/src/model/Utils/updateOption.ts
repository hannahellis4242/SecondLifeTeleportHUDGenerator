import Menu from "../Menu";
import Option from "../Option";

const isMenu = (item: Menu | undefined): item is Menu => {
  return !!item;
};

const findMenuWithOptionId = (
  [head, ...tail]: Menu[],
  optionId: string
): Menu | null => {
  if (head) {
    if (head.options.some(({ id }) => id === optionId)) {
      return head;
    }
    return findMenuWithOptionId(
      tail.concat(head.options.map(({ action }) => action.menu).filter(isMenu)),
      optionId
    );
  }
  return null;
};

export const updateOption = (
  current: Menu,
  optionId: string,
  updatedOption: Option
) => {
  const menuWithGivenId = findMenuWithOptionId([current], optionId);
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
