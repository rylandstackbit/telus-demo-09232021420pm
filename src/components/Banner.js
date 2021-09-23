import { oid, fpath } from '../utils/annotations';
import React from 'react';
import _ from 'lodash';

import { Link, withPrefix, classNames } from '../utils';
import Icon from './Icon';

export default class Banner extends React.Component {
    render() {
        const backgroundColor = _.get(this.props, 'action');
        const url = _.get(action, 'url');
        const newWindow = _.get(action, 'new_window');
        const noFollow = _.get(action, 'no_follow');
        const attrs = {};
        if (newWindow) {
            attrs.target = '_blank';
        }
        if (newWindow || noFollow) {
            attrs.rel = [(newWindow ? 'noopener' : ''), (noFollow ? 'nofollow' : '')].filter(Boolean).join(' ');
        }

        const annotationPrefix = _.get(this.props, 'annotationPrefix', '');
        const showIcon = hasIcon && icon;
        const annotations = [
            `${annotationPrefix}`,
            `${annotationPrefix}.label${showIcon ? '#span[1]' : ''}`
        ];

        return (
            <Link href={withPrefix(url)} {...attrs} className={classes} {...fpath(annotations.join(' '))}>
                {(hasIcon && icon) ? (
                    <React.Fragment>
                        <Icon icon={icon} />
                        <span
                            className={classNames({
                                'order-first': iconPos === 'right',
                                'sr-only': iconPos === 'center'
                            })}
                        >
                            {label}
                        </span>
                    </React.Fragment>
                ) :
                    label
                }
            </Link>
        );
    }
}
