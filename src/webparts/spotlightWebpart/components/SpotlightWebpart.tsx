import * as React from 'react';
import { ISpotlightWebpartProps } from './ISpotlightWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jQuery from "jquery";
import SimpleSlider from './Spotlight/Spolights';

export default class SpotlightWebpart extends React.Component<ISpotlightWebpartProps, {}> {
  public render(): React.ReactElement<ISpotlightWebpartProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <>
      <SimpleSlider />
      </>
    );
  }
}
