import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpotlightWebpartWebPartStrings';
import SpotlightWebpart from './components/SpotlightWebpart';
import { ISpotlightWebpartProps } from './components/ISpotlightWebpartProps';

export interface ISpotlightWebpartWebPartProps {
  description: string;
}

export default class SpotlightWebpartWebPart extends BaseClientSideWebPart<ISpotlightWebpartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpotlightWebpartProps> = React.createElement(
      SpotlightWebpart,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
