<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitFilesAutoload
{
    public static $files = array (
        '6d9003eea93a81f3586b5d9c5bd91272' => __DIR__ . '/..' . '/a/a/test.php',
        'e56cac94f86c787e1efd645809df361d' => __DIR__ . '/..' . '/b/b/test2.php',
        'df8470dfa2ebd6b31da05b60fb4ec29a' => __DIR__ . '/..' . '/c/c/foo/bar/test3.php',
        '68f1e24e6cd39de885cb5a47678e6518' => __DIR__ . '/..' . '/c/c/foo/bar/test4.php',
        '5e70d6595c54512c151823ca0663ab51' => __DIR__ . '/../..' . '/root.php',
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInitFilesAutoload::$classMap;

        }, null, ClassLoader::class);
    }
}
