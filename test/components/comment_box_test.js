import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {

    let component;

    beforeEach(() => {
        //jquery object
        component = renderComponent(CommentBox);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('comment-box');
    });

    it('has a text area', () => {
        //jquery method
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });
})