// Copyright 2015-2016, EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Install CentOS',
    injectableName: 'Graph.InstallCentOS',
    options: {
        'install-os': {
            version: null,
            _taskTimeout: 3600000 // 1hour
        },
        'rackhd-callback-notification-wait': {
            _taskTimeout: 1200000 //20 minutes
        },
        'validate-ssh': {
            retries: 10
        }
    },
    tasks: [
        {
            label: 'set-boot-pxe',
            taskName: 'Task.Obm.Node.PxeBoot',
            ignoreFailure: true
        },
        {
            label: 'reboot',
            taskName: 'Task.Obm.Node.Reboot',
            waitOn: {
                'set-boot-pxe': 'finished'
            }
        },
        {
            label: 'install-os',
            taskName: 'Task.Os.Install.CentOS',
            waitOn: {
                'reboot': 'succeeded'
            }
        },
        {
            label: 'rackhd-callback-notification-wait',
            taskName: 'Task.Wait.Notification',
            waitOn: {
                'install-os': 'succeeded'
            }
        },
        {
            label: 'validate-ssh',
            taskName: 'Task.Ssh.Validation',
            waitOn: {
                'rackhd-callback-notification-wait': 'succeeded'
            }
        }
    ]
};
