import React from "react";
import { UserContext } from "./Context";
import { useContext } from "react";

type Props = {
  children: JSX.Element;
};

class UserProvider extends React.Component<Props, { user: any }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  setUserDetails = (user: any) => {
    this.setState({
      user: user,
    });
  };

  getUserDetails = () => {
    return this.state.user;
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          getUserDetails: this.getUserDetails,
          setUserDetails: this.setUserDetails,
        }}
      >
        {this?.props?.children}
      </UserContext.Provider>
    );
  }
}

UserProvider.contextType = UserContext;

export function useUserDetails(): [() => void , (userDetails: any) => void] {
  const ctx = useContext(UserContext);
  return [ctx.getUserDetails, ctx.setUserDetails];
}

export default UserProvider;
