import Link from 'next/link';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import * as React from 'react';
import { IconType } from '../types/utils';

type Props = {
  icon: IconType,
  primary: React.ReactChildren | string,
  href: string,
};

export default function ListItemLink({ icon, primary, href }: Props): JSX.Element {

  // const CustomLink = (props: unknown) => <Link href={ href } { ...props } />;
  const CustomLink = React.useMemo(
    () => React.forwardRef((linkProps, ref) => (
      <Link ref={ ref } href={ href } {...linkProps} />
    )),
    [href],
  );

  return (
    <li>
      <ListItem button component={ CustomLink }>
        <ListItemIcon>{ icon }</ListItemIcon>
        <ListItemText primary={ primary } />
      </ListItem>
    </li>
  );
}