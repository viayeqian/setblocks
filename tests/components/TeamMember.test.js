import React from 'react';
import { shallow } from 'enzyme';
import TeamMember from '../../web/components/TeamMember';

import Text from '../../web/components/Text';

let renderedComponent;
let MOCK_TEAM_MEMBER = {
    id: '00000001',
    name: 'Team Member #1'
}

let mock = () => jest.fn();

describe('TeamMember Component', () => {
    beforeEach(() => {

        renderedComponent = shallow(
            <TeamMember
                name={MOCK_TEAM_MEMBER.name}
            />
        );
    });

    it('should render correctly', () => {
        expect(renderedComponent).toMatchSnapshot();
    })

    it('should display the correct name', () => {
        let nameText = renderedComponent.find(Text)
        
        expect(nameText.contains(MOCK_TEAM_MEMBER.name)).toBe(true)
    })

});