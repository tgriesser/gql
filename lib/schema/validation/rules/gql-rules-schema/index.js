'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NoUnusedTypeDefinition = require('./NoUnusedTypeDefinition');

var _KnownDirectives = require('graphql/validation/rules/KnownDirectives');

var _KnownArgumentNames = require('graphql/validation/rules/KnownArgumentNames');

var _ValuesOfCorrectType = require('graphql/validation/rules/ValuesOfCorrectType');

var _ProvidedNonNullArguments = require('graphql/validation/rules/ProvidedNonNullArguments');

var _UniqueArgumentNames = require('graphql/validation/rules/UniqueArgumentNames');

var _UniqueDirectivesPerLocation = require('graphql/validation/rules/UniqueDirectivesPerLocation');

exports.default = {
  rules: [_NoUnusedTypeDefinition.NoUnusedTypeDefinition, _KnownDirectives.KnownDirectives, _KnownArgumentNames.KnownArgumentNames, _ValuesOfCorrectType.ValuesOfCorrectType, _ProvidedNonNullArguments.ProvidedNonNullArguments, _UniqueArgumentNames.UniqueArgumentNames, _UniqueDirectivesPerLocation.UniqueDirectivesPerLocation],
  config: {
    NoUnusedTypeDefinition: 'warn',
    KnownDirectives: 'error',
    KnownArgumentNames: 'error',
    ValuesOfCorrectType: 'error',
    ProvidedNonNullArguments: 'error',
    UniqueArgumentNames: 'error',
    UniqueDirectivesPerLocation: 'error'
  }
};