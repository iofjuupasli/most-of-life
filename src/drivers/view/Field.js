import FieldComponent from './FieldComponent';

export default (element, size, scale) => board$ => {
    const field = new FieldComponent(element, size, scale);
    board$.forEach(board => field.draw(board));
};
