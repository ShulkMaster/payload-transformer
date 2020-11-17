export const createMasiveSnakeObject = (level: number = 100): object => {
  if (level < 1) {
    return {
      i_tried: '🎵🎵 so hard 🎵🎵',
      and_got: '🎵🎵 so far 🎵🎵',
      but_in: '🎵🎵 the end 🎵🎵',
      it: '🎵🎵 doesn\'t even matter 🎵🎵',
    };
  }
  return {
    some_property: 0.758 * level,
    name_of_something: 'some Name',
    random_prop: level % 2 === 0 ? createMasiveSnakeObject(level -1) : level,
    null_prop: null,
    undefined_prop: undefined,
    empty_data: {},
    empty_list: [],
    one_more_thing_to_test_just_making_sure: {
      a: 'b',
      c: 'd',
    },
    list_of_people: [
      { id_person: '01', name_person: 'josh', null_prop: null },
      { id_person: '02', name_person: 'miguel', undefined_prop: undefined },
      undefined,
    ],
    nested_object: createMasiveSnakeObject(level - 1),
  };
};