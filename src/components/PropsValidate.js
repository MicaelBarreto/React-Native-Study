import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const PropsValidate  = props => 
    <Text style={{ fontSize:35 }}>
        {props.label}
        {props.year + 2000}
    </Text>

PropsValidate.defaultProps = {
    label: 'Year: '
};

PropsValidate.defaultProtoTypes = {
    year: PropTypes.number.isRequired
};

export default PropsValidate;

