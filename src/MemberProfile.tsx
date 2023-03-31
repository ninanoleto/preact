import { useDataComponent } from './preact';
import { useState } from 'preact/hooks';

/**
 * Props are standard type in React, a plain object used to pass on immutable arguments to a component.
 */
type Props = {
  firstName: string;
  lastName: string;
  avatar: string;
};

export const MemberProfile = ({ firstName, lastName, avatar }: Props) => {
  const [member, setMember] = useState({ firstName, lastName, avatar });
  const [userId, setUserId] = useState(2);

  /**
   * Even though we started with a inital member we can still update it on the client side with an api call.
   */
  const ramdomMember = async () => {
    const res = await fetch(`https://reqres.in/api/users/${userId}`);
    const { data } = await res.json();

    const newMember = {
      firstName: data.first_name,
      lastName: data.last_name,
      avatar: data.avatar,
    };

    setMember(newMember);
    setUserId((previousUserId) => previousUserId + 1);
  };

  return (
    <>
      <div className='c-member-profile'>
        Hello {member.firstName} {member.lastName}!
        <img src={member.avatar} />
      </div>
      <button onClick={ramdomMember}>Change member</button>
    </>
  );
};

/**
 * Here we set up this component with props taken from the html data attributes.
 * This allows us to server side render the inital state of the component for a faster first paint and better SEO.
 */
const memberProfileComponent = () => {
  useDataComponent('.js-member-profile', (dataset) => (
    <MemberProfile
      firstName={dataset.first_name!}
      lastName={dataset.last_name!}
      avatar={dataset.avatar!}
    />
  ));
};

export default memberProfileComponent;
