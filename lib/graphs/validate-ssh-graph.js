// Copyright 2015-2016, EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Validate Ssh',
    injectableName: 'Graph.validateSsh',
    options: {        
        'validate-ssh': {
            retries: 10
        }
    },
    tasks: [
        {
            label: "validate-ssh",
            taskName: "Task.Ssh.Validation",
        }
    ]
};
