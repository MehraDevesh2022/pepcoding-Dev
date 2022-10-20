// use for system detials
const os =  require("os");

console.log("system Architecture : " + os.arch());// this prins system architecture
// system Architecture : x64
console.log('Platform : ' + os.platform()); // this shows system platform
//Platform : win32

console.log("Network Details");
console.log(os.networkInterfaces()); // Network information
/**
 * 'Wi-Fi': [
    {
      address: 'fe80::5174:b84a:deb6:250a',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '34:c9:3d:62:6e:57',
      internal: false,
      cidr: 'fe80::5174:b84a:deb6:250a/64',
      scopeid: 19
    },
    {
      address: '192.168.1.4',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '34:c9:3d:62:6e:57',
      internal: false,
      cidr: '192.168.1.4/24'
    }
  ],
  'Loopback Pseudo-Interface 1': [
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    },
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    }
  ]
}
 */
console.log("cpu details");
console.log(os.cpus()); // details about cpu
/**
 * cpu details
[
  {
    model: 'AMD Ryzen 5 3500U with Radeon Vega Mobile Gfx  ',
    speed: 2096,
    times: { user: 1168609, nice: 0, sys: 949343, idle: 6057437, irq: 159984 }
  },
  {
    model: 'AMD Ryzen 5 3500U with Radeon Vega Mobile Gfx  ',
    speed: 2096,
    times: { user: 999578, nice: 0, sys: 502437, idle: 6673156, irq: 19234 }
  },
  {
    model: 'AMD Ryzen 5 3500U with Radeon Vega Mobile Gfx  ',
    speed: 2096,
    times: { user: 1343640, nice: 0, sys: 573734, idle: 6257796, irq: 13453 }
  },
  {
    model: 'AMD Ryzen 5 3500U with Radeon Vega Mobile Gfx  ',
    speed: 2096,
    times: { user: 1159875, nice: 0, sys: 419343, idle: 6595953, irq: 9828 }
  },
  {
    model: 'AMD Ryzen 5 3500U with Radeon Vega Mobile Gfx  ',
    speed: 2096,
    times: { user: 953437, nice: 0, sys: 430625, idle: 6791109, irq: 8859 }
  },
  {
    model: 'AMD Ryzen 5 3500U with Radeon Vega Mobile Gfx  ',
    speed: 2096,
    times: { user: 740828, nice: 0, sys: 282859, idle: 7151484, irq: 6921 }
  },
  {
    model: 'AMD Ryzen 5 3500U with Radeon Vega Mobile Gfx  ',
    speed: 2096,
    times: { user: 627656, nice: 0, sys: 236828, idle: 7310687, irq: 5421 }
  },
  {
    model: 'AMD Ryzen 5 3500U with Radeon Vega Mobile Gfx  ',
    speed: 2096,
    times: { user: 559250, nice: 0, sys: 198937, idle: 7416968, irq: 4203 }
  }
]
 */
