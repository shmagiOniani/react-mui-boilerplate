declare module 'simplebar-react' {
    import * as React from 'react';
  
    interface SimpleBarProps {
      children: React.ReactNode;
      // Add other props based on SimpleBar's documentation if needed
      scrollbarMinSize?: number;
      scrollbarMaxSize?: number;
      autoHide?: boolean;
      clickOnTrack?: boolean;
      // Add more props as per usage
    }
  
    export default class SimpleBar extends React.Component<SimpleBarProps> {}
  }
  