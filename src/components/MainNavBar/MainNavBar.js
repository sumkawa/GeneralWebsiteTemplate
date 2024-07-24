import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons';
import './styles.css';

const MainNavBar = () => {
  return (
    <NavigationMenu.Root className='NavigationMenuRoot'>
      <NavigationMenu.List className='NavigationMenuList'>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className='NavigationMenuTrigger'>
            Learn <CaretDownIcon className='CaretDown' aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className='NavigationMenuContent'>
            <ul className='List one'>
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <a className='Callout' href='/'>
                    <FaceIcon />
                    <div className='CalloutHeading'>Ready to get started?</div>
                    <p className='CalloutText'>Craft your best application</p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href='https://stitches.dev/' title='Stitches'>
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href='/colors' title='Colors'>
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href='https://icons.radix-ui.com/' title='Icons'>
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className='NavigationMenuTrigger'>
            Overview <CaretDownIcon className='CaretDown' aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className='NavigationMenuContent'>
            <ul className='List two'>
              <ListItem
                title='Introduction'
                href='/primitives/docs/overview/introduction'
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title='Getting started'
                href='/primitives/docs/overview/getting-started'
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem title='Styling' href='/primitives/docs/guides/styling'>
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title='Animation'
                href='/primitives/docs/guides/animation'
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title='Accessibility'
                href='/primitives/docs/overview/accessibility'
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title='Releases'
                href='/primitives/docs/overview/releases'
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className='NavigationMenuLink'
            href='https://github.com/radix-ui'
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className='NavigationMenuIndicator'>
          <div className='Arrow' />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className='ViewportPosition'>
        <NavigationMenu.Viewport className='NavigationMenuViewport' />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames('ListItemLink', className)}
          {...props}
          ref={forwardedRef}
        >
          <div className='ListItemHeading'>{title}</div>
          <p className='ListItemText'>{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default MainNavBar;
