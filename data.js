const BUILDS_DB = [
  {
    id: "build#1",
    filename: "Arrow-v11.0-beryllium-OFFICIAL-20210227-VANILLA.zip",
    download: "https://get.mirror2.arrowos.net/download.php?token=gMjezQd1Ol9ipqtbZnwoyNI6T3fDAS5hrHWuUFaY4BVk7J2RcKsxCvXmPE0G&version=arrow-11.0&variant=official&device=beryllium",
    size: "880.16 MB",
    date: new Date(2021, 02 - 1, 27, 12, 00),
    tab: "vanilla",
    changelog: `
- Remove fingerprint HAL from background cpuset
- Enable Power HAL interaction boost
- Misc fixes and upstream changes.

2021-02-18:
- Adress selinux denials
- Remove DiracSound (do not work)
- Fix video rendering in some apps (example AliExpress App)
- Build qti thermal 2.0 hal
- Switch to source built vendor.qti.hardware.perf@2.0
- Misc fixes and upstream changes.

Note:
- Update 2021-01-01 and earlier builds only with clean flash!`

  },
  {
    id: "build#2",
    filename: "Arrow-v11.0-beryllium-OFFICIAL-20210227-GAPPS.zip",
    download: "https://get.mirror2.arrowos.net/download.php?token=qPOVADjSUJviuKhMNTd7B4HGfxIX2boL9l3m8Fy0R6gWC1wctaknzZsErYQ5&version=arrow-11.0&variant=official&device=beryllium",
    size: "1195.05 MB",
    date: new Date(2021, 02 - 1, 27, 12, 00),
    tab: "gapps",
    changelog: `
- Remove fingerprint HAL from background cpuset
- Enable Power HAL interaction boost
- Misc fixes and upstream changes.

2021-02-18:
- Adress selinux denials
- Remove DiracSound (do not work)
- Fix video rendering in some apps (example AliExpress App)
- Build qti thermal 2.0 hal
- Switch to source built vendor.qti.hardware.perf@2.0
- Misc fixes and upstream changes.

Note:
- Update 2021-01-01 and earlier builds only with clean flash!`

  },
];