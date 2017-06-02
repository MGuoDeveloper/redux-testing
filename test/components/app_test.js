import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App', () => {

    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    // Use 'it' to test a single attribute of a target
    it('shows the correct text', () => {

        // Use 'expect' to make an 'assertion' about a target
        // expect(component).to.have.class('component-box');
        // component: The thing we want to make an assertion about
        // component-box: the value we expect
        // to.have.class: Assertion matcher - how to compare two given values
        expect(component).to.contain('React simple starter');

    });

});
