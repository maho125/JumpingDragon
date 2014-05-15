pandaConfig = {
    sourceFolder: 'js',
    mediaFolder: 'assets',
    outputFile: 'game.min.js',
    sitelock: 'tomasmahrik.com',
    
    system: {
        orientation: 1,
        width: 640,
        height: 480
    },
    
    debug: {
        enabled: true,
        color: 0x000000,
        position: {
            x: 600,
            y: 20
        }
    },
    
    storage: {
        id: 'com.tomasmahrik.keyboard'
    }
};

pandaConfig.iOS = {
    // Config for iOS devices
};
 
pandaConfig.android = {
    // Config for Android devices
};

pandaConfig.wp = {
    // Config for Windows Phone devices
};