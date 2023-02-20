type Props = {};

export function diseableable<T extends Props = Props>(WrappedComponent: React.ComponentType<T>) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const OuterComponent = (props: Omit<T, keyof Props>) => {
    // Fetch the props you want to inject. This could be done with context instead.
    const themeProps = {
      fromDiseableable: 'fromDiseableable',
    };

    // props comes afterwards so the can override the default ones.
    return <><WrappedComponent {...themeProps} {...(props as T)} /><button>On/Off</button></>;
  };

  OuterComponent.displayName = `diseableable(${displayName})`;

  return OuterComponent;
}
