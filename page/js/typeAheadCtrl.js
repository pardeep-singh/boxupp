/*******************************************************************************
 *  Copyright 2014 Paxcel Technologies
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *******************************************************************************/
angular.module("boxuppApp").controller('typeAheadController',function($scope,$http,$rootScope){
	$scope.selected = undefined;
	
	$scope.alertUser = function(){
		$scope.activeVM.boxUrl = $scope.boxMappings[$scope.activeVM.boxType];
		$scope.updateURLInformation();
	}
	$scope.states = ["OpenBSD 5.3 64-bit (Vagrant 1.2)",
"OpenBSD 5.3 64-bit",
"Aegir-up Aegir (Debian Squeeze 6.0.4 64-bit)",
"Aegir-up Debian (Debian Squeeze 6.0.4 64-bit)",
"Aegir-up LAMP (Debian Squeeze 6.0.4 64-bit)",
"AppScale 1.12.0 (Ubuntu Precise 12.04 64-bit)",
"Arch Linux 64 (2013-08-01)",
"Arch Linux x86_64 (2013-08)",
"Arch Linux 64 (2013-07-28) (Puppet and Chef installed)",
"Arch Linux 64 (2013-07-26) - Base Install",
"Arch Linux 64 (2013-07-26) - Chef 11.6.0 from gem, Ruby from pacman",
"Archlinux 2011-08-19",
"Arch Linux x64 (2013-08-17)",
"Archlinux 2013-08-09",
"Arch Linux_2013.11 x64 (vanilla)",
"CentOS 5.6 32",
"CentOS 5.6 64 Packages (puppet 2.6.10 &amp; chef 0.10.6 from RPM, VirtualBox 4.2.0)",
"CentOS 5.8 x86_64",
"CentOS 5.8 x86_64 minimal + guest additions, puppet, chef",
"CentOS 5.9 x86_64 minimal + guest additions, puppet, chef",
"CentOS 5.10 x86_64 Base, VMware Tools, Chef 11.6 (Omnibus), Puppet 3.3.2 (Vendor repo)",
"CentOS 6.2 32bit (puppet)",
"CentOS 6.3 32bit (puppet)",
"CentOS 6.3 x86_64 + Chef 10.14.2 + VirtualBox 4.1.22 (with guest additions)",
"CentOS 6.3 x86_64 minimal",
"CentOS 6.4 x86_64 ",
"CentOS 6.4 x86_64 2013-07-01 -- With development tools (gcc, etc...). Works on VBox 4.2.14!",
"CentOS 6.4 i386 Minimal (VirtualBox Guest Additions 4.2.16, Chef 11.6.0, Puppet 3.2.3)",
"CentOS 6.4 x86_64 Minimal (VirtualBox Guest Additions 4.2.16, Chef 11.6.0, Puppet 3.2.3)",
"CentOS 6.4 x86_64 Minimal VMware Fusion (VMware Tools, Chef 11.4.0, Puppet 3.1.1)",
"CentOS 6.5 x86_64 ",
"CentOS 6.4 amd64 for vagrant-lxc with Puppet 3.3.1",
"CentOS 6.5 amd64 for vagrant-lxc with Puppet 3.3.2",
"Debian 6 Squeeze x64 configured according to documentation",
"Debian squeeze 32",
"Debian Squeeze 6.0.6 32 - Vanilla (No Ruby, no puppet, only Chef 10.14 from omnibus installer)",
"Debian squeeze 64 (French (Swiss) keyboard layout)",
"Debian Squeeze amd64 (with Puppet, Chef and VirtualBox 4.2.1)",
"Debian Squeeze amd64 (with VirtualBox 4.2.4)",
"Debian Squeeze amd64 (Chef 10.24.4, Puppet 3.1.1, VirtualBox 4.2.12)",
"Debian Squeeze i386 6.0.7 (Chef 10.18.2, Puppet 2.6.2, VirtualBox 4.2.6, nfs-common 1.2.2)",
"Debian Squeeze 6.0.7 amd64 (french) with Puppet 3.1.1, Chef 11.4.0 and VirtualBox 4.2.12, built with Veewee 0.3.7 (2013/04/20)",
"Debian Squeeze 6.0.8 amd64 (Chef 11.8.0, VMware tools)",
"Debian Squeeze amd64 (Puppet 3.2.3, LXC, 2013.07.27)",
"Debian Wheezy amd64 (Puppet 3.2.3, LXC, 2013.07.27)",
"Debian Wheezy amd64 (Puppet, VirtualBox)",
"Debian Wheezy 7.1 amd64 (french) with Chef 11.4.4 and VirtualBox 4.1.18 (2013/06/19)",
"Debian Wheezy 7.2 amd64 (VirtualBox Guest Additions 4.3.0) (2013/10/19)",
"Debian Wheezy 7.2 amd64 (VirtualBox Guest Additions 4.3.0",
"Debian Wheezy 7.0 amd64 (Minimal Install + Puppet)",
"Debian Wheezy 7.0 amd64 (British) Puppet 3.2.1, Chef 11.4.4",
"Debian Wheezy 7.0 amd64 - Vanilla (No Ruby, no puppet, no Chef)",
"Debian Wheezy (7.0.0) amd64, no Ruby/Puppet/Chef, VirtualBox 4.2.4, built with Veewee 0.3.7 (2013/06/12)",
"Debian Wheezy (7.0.0) amd64, with Ruby 1.9.1, Puppet 3.2.1, Chef 11.4.4, VirtualBox 4.2.4, built with Veewee 0.3.7 (2013/06/12)",
"Debian Wheezy i386 minimal from grml-debootstrap, italian layout, w/ guest additions (2013/10/23)",
"Fedora 18 x86 Minimal (with Chef 11.4.0, VirtualBox Guest Additions 4.2.10 and rpmfusion enabled); md5sum 36b8aaf49421510a726b6175ee44e15b sha1sum d5a6a3c4ab1538105b18e6efba4d9479798a430e",
"Fedora 19 x86_64 (Puppet, VirtualBox)",
"FreeBSD 9.2 x86_64 Minimal (VirtualBox, ZFS)",
"FreeBSD 9.2 i386 (UFS, VirtualBox Guest Additions 4.2.18, pkgng enabled, Python 2.7) ",
"Gentoo 2013.02.14 i686 (32bit) (Puppet, Chef, VirtualBox 4.2.6)",
"Gentoo 2013.05 amd64 (Chef omnibus 11.4.4, VirtualBox 4.2.12)",
"Gentoo 2013.10.24 amd64 (chef, puppet) on 2013.10.30 ",
"Gentoo 2013.10.24 amd64 minimal on 2013.10.30",
"Gentoo 2013.10.29 i686 (chef, puppet) on 2013.10.30",
"Gentoo 2013.10.29 amd64 minimal on 2013.10.30",
"Funtoo 2013.06 amd64 (Chef omnibus 11.4.4, VirtualBox 4.2.12)",
"Heroku Celadon Cedar",
"Kali Linux",
"Kali Linux 1.0 i686",
"Minimal CentOS 5.6",
"Minimal CentOS 6.0",
"CentOS 6.3 32bit (Ruby 1.8.7 &amp; Chef 10.14.2)",
"Official Ubuntu 12.04 daily Cloud Image amd64 (VirtualBox 4.1.12)",
"Official Ubuntu 12.04 daily Cloud Image i386 (VirtualBox 4.1.12)",
"Official Ubuntu 12.10 daily Cloud Image amd64 (No Guest Additions)",
"Official Ubuntu 12.10 daily Cloud Image i386 (No Guest Additions)",
"Official Ubuntu 13.04 daily Cloud Image amd64 (No Guest Additions)",
"Official Ubuntu 13.04 daily Cloud Image i386 (No Guest Additions)",
"Official Ubuntu 13.10 daily Cloud Image amd64 (Development release, No Guest Additions)",
"Ubuntu 13.10 amd64 for VMWare (with Chef, ruby1.9.3 and vmware-tools)",
"Ubuntu Server 13.10 amd64 (Chef 11.8.0, VMware tools)",
"Official Ubuntu 13.10 daily Cloud Image i386 (Development release, No Guest Additions)",
"Ubuntu 13.04 amd64 for vagrant-lxc with Puppet 3.1.1",
"Ubuntu 12.10 amd64 for vagrant-lxc with Puppet 3.1.1",
"Ubuntu 12.04 amd64 for vagrant-lxc with Puppet 3.1.1",
"Ubuntu 12.04 amd64 for with raring kernel and docker 0.6.4",
"Ubuntu Raring Ringtail (13.04) i386 Minimal (minimal = rvm, ruby-2.0.0p247, gem, chef, puppet)",
"OmniOS (r151002)",
"OpenBSD 5.2 (amd64) puppet chef pkg ports",
"OpenBSD 5.0 (amd64) puppet chef pkg ports",
"OpenBSD 5.0 (i386) puppet chef pkg ports",
"openSUSE 12.1 x64",
"openSUSE 12.3 (x64) puppet chef ",
"OpenSuse 12.2 x86 (puppet)",
"OpenSuse 12.2 x86_64 (puppet)",
"OpenSuse 12.3 x86 (puppet)",
"OpenSuse 12.3 x86_64 (puppet)",
"Opscode centos 5",
"Opscode ubuntu 10.04",
"Oracle Linux 5.9 x86_64 (Chef + Puppet)",
"Oracle Linux 5.9 i386 VBox 4.2.16 puppet chef",
"Oracle Linux 5.9 x86_64 VBox 4.2.16 puppet chef",
"Oracle Linux 5.10 x86_64 (Chef + Puppet)",
"Oracle Linux 6.4 x86_64 (Chef + Puppet)",
"Oracle Linux 6.4 i386 VBox 4.2.16 puppet chef",
"Oracle Linux 6.4 x86_64 VBox 4.2.16 puppet chef",
"Oracle Linux 6.5 x86_64 (Chef + Puppet)",
"Puppetlabs CentOS 5.9 x86_64, VBox 4.2.10",
"Puppetlabs CentOS 5.9 x86_64, VBox 4.2.10, No Puppet or Chef",
"Puppetlabs CentOS 6.4 x86_64, VBox 4.2.10",
"Puppetlabs CentOS 6.4 x86_64, VBox 4.2.10, No Puppet or Chef",
"Puppetlabs Debian 6.0.7 x86_64, VBox 4.2.10",
"Puppetlabs Debian 6.0.7 x86_64, VBox 4.2.10, No Puppet or Chef",
"Puppetlabs Debian 7.0rc1 x86_64, VBox 4.2.10",
"Puppetlabs Debian 7.0rc1 x86_64, VBox 4.2.10, No Puppet or Chef",
"Puppetlabs Fedora 18 x86_64, VBox 4.2.10",
"Puppetlabs Fedora 18 x86_64, VBox 4.2.10, No Puppet or Chef",
"Puppetlabs SLES 11sp1 x86_64, VBox 4.2.10",
"Puppetlabs SLES 11sp1 x86_64, VBox 4.2.10, No Puppet or Chef",
"Puppetlabs Ubuntu 10.04.4 x86_64, VBox 4.2.10",
"Puppetlabs Ubuntu 10.04.4 x86_64, VBox 4.2.10, No Puppet or Chef",
"Puppetlabs Ubuntu 12.04.2 x86_64, VBox 4.2.10",
"Puppetlabs Ubuntu 12.04.2 x86_64, VBox 4.2.10, No Puppet or Chef",
"Scientific Linux 6 64 chefclient0.10",
"Scientific Linux 6 64 chefserver-0.10",
"Scientific Linux 6 64 minimal",
"Severalnines ClusterControl, Database Cluster Deployment Scripts, VBox 4.2.10, Ubuntu 12.04 LTS",
"Slackware 13.37",
"Ubuntu 10.04.4 LTS Lucid x86_64 (Apache 2.2.14, PHP 5.3.2, MySQL 5.1.66)",
"Ubuntu 11.04 server amd64",
"Ubuntu 11.04 server i386",
"Ubuntu 12.04.1 LTS x86_64 (Guest Additions 4.1.18)",
"Ubuntu 12.04.2 Server i386 with VirtualBox Guest Additions v4.2.6, Chef Omnibus 11",
"Ubuntu 12.04.2 Server amd64 for VMWare Fusion and Chef Omnibus 11",
"Ubuntu 12.10 Quantal x86_64 (Guest Additions 4.2.2)",
"Ubuntu lucid 32",
"Ubuntu lucid 64",
"Ubuntu Lucid32 lampp, mongodb, git",
"Ubuntu Lucid32 lampp, mongodb, git, lithium, rockmongo",
"Ubuntu Maverick 64",
"Ubuntu precise 32 VirtualBox",
"Ubuntu precise 64 VirtualBox",
"Ubuntu precise 64 VMWare",
"Ubuntu raring 64 VMWare",
"Ubuntu precise 64 (Ruby 1.9.3 &amp; Chef 10.12)",
"Ubuntu precise 64 with some perl dependencies and few other essentials",
"Ubuntu Server 12.04 amd64 (with Puppet, Chef and VirtualBox 4.2.1)",
"Ubuntu Server 12.04.1 i868 (VirtualBox 4.2.1)",
"Ubuntu 12.04.2 AMD64 (Chef 11 installed via Omnibus; VirtualBox 4.2.6; Standard Puppet)",
"Ubuntu Server 12.10 amd64 Minimal (VirtualBox 4.2.6)",
"Ubuntu Raring 32 (13.04) Vanilla",
"Ubuntu Raring 64 (13.04) Vanilla",
"Ubuntu Server raring 13.04 amd64  (ruby 1.9.3, puppet, guest additions)",
"Ubuntu Server raring 13.04 amd64 (ruby-2.0.0-247 only)  MySQL headers already included for building mysql2 extension",
"Ubuntu Server 13.04 x64 Raring Ringtail (VirtualBox Guest Additions 4.2.12, Chef 11.4.4, Puppet 2.7.18)",
"Ubuntu Server Precise 12.04.3 amd64  Kernel is ready for Docker (Docker not included)",
"Ubuntu Server Precise 12.04.3 amd64  Kernel is ready for Docker (Docker not included)",
"Ubuntu Server Precise 12.04.3 amd64",
"Ubuntu Server Precise 12.04.3 amd64",
"Ubuntu Server Precise 12.04 amd64 (Chef 11.8.0, VMware Tools)",
"Openmandriva2013.0 x86_64 (LXC, 2013.10.21)"
];
  /*$scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];*/
  // Any function returning a promise object can be used to load values asynchronously
  /*$scope.getLocation = function(val) {
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(res){
      var addresses = [];
      angular.forEach(res.data.results, function(item){
        addresses.push(item.formatted_address);
      });
      return addresses;
    });
  };*/

  $scope.statesWithFlags = [{"name":"Alabama","flag":"5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png"},{"name":"Alaska","flag":"e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png"},{"name":"Arizona","flag":"9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png"},{"name":"Arkansas","flag":"9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png"},{"name":"California","flag":"0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png"},{"name":"Colorado","flag":"4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png"},{"name":"Connecticut","flag":"9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png"},{"name":"Delaware","flag":"c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png"},{"name":"Florida","flag":"f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png"},{"name":"Georgia","flag":"5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png"},{"name":"Hawaii","flag":"e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png"},{"name":"Idaho","flag":"a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png"},{"name":"Illinois","flag":"0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png"},{"name":"Indiana","flag":"a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png"},{"name":"Iowa","flag":"a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png"},{"name":"Kansas","flag":"d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png"},{"name":"Kentucky","flag":"8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png"},{"name":"Louisiana","flag":"e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png"},{"name":"Maine","flag":"3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png"},{"name":"Maryland","flag":"a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png"},{"name":"Massachusetts","flag":"f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png"},{"name":"Michigan","flag":"b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png"},{"name":"Minnesota","flag":"b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png"},{"name":"Mississippi","flag":"4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png"},{"name":"Missouri","flag":"5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png"},{"name":"Montana","flag":"c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png"},{"name":"Nebraska","flag":"4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png"},{"name":"Nevada","flag":"f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png"},{"name":"New Hampshire","flag":"2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png"},{"name":"New Jersey","flag":"9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png"},{"name":"New Mexico","flag":"c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png"},{"name":"New York","flag":"1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png"},{"name":"North Carolina","flag":"b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png"},{"name":"North Dakota","flag":"e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png"},{"name":"Ohio","flag":"4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png"},{"name":"Oklahoma","flag":"6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png"},{"name":"Oregon","flag":"b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png"},{"name":"Pennsylvania","flag":"f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png"},{"name":"Rhode Island","flag":"f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png"},{"name":"South Carolina","flag":"6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png"},{"name":"South Dakota","flag":"1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png"},{"name":"Tennessee","flag":"9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png"},{"name":"Texas","flag":"f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png"},{"name":"Utah","flag":"f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png"},{"name":"Vermont","flag":"4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png"},{"name":"Virginia","flag":"4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png"},{"name":"Washington","flag":"5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png"},{"name":"West Virginia","flag":"2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png"},{"name":"Wisconsin","flag":"2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png"},{"name":"Wyoming","flag":"b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png"}];
  $rootScope.boxMappings = {
"OpenBSD 5.3 64-bit (Vagrant 1.2)":"https://dl.dropboxusercontent.com/u/12089300/VirtualBox/openbsd53_amd64_vagrant12.box",
"OpenBSD 5.3 64-bit":"https://dl.dropboxusercontent.com/u/12089300/VirtualBox/openbsd53_amd64.box",
"Aegir-up Aegir (Debian Squeeze 6.0.4 64-bit)":"http://ergonlogic.com/files/boxes/aegir-current.box",
"Aegir-up Debian (Debian Squeeze 6.0.4 64-bit)":"http://ergonlogic.com/files/boxes/debian-current.box",
"Aegir-up LAMP (Debian Squeeze 6.0.4 64-bit)":"http://ergonlogic.com/files/boxes/debian-LAMP-current.box",
"AppScale 1.12.0 (Ubuntu Precise 12.04 64-bit)":"http://download.appscale.com/download/AppScale%201.12.0%20VirtualBox%20Image",
"Arch Linux 64 (2013-08-01)":"https://dl.dropboxusercontent.com/u/31112574/arch64-20130801.box",
"Arch Linux x86_64 (2013-08)":"https://googledrive.com/host/0B_BLFE4aPn5zUVpyaHdLanVnMTg/vagrant-archlinux-2013-8.box",
"Arch Linux 64 (2013-07-28) (Puppet and Chef installed)":"https://dl.dropboxusercontent.com/u/9213047/arch64_2013-07-28.box",
"Arch Linux 64 (2013-07-26) - Base Install":"http://iweb.dl.sourceforge.net/project/flowboard-vagrant-boxes/arch64-2013-07-26-minimal.box",
"Arch Linux 64 (2013-07-26) - Chef 11.6.0 from gem, Ruby from pacman":"http://iweb.dl.sourceforge.net/project/flowboard-vagrant-boxes/arch64-2013-07-26-chef.box",
"Archlinux 2011-08-19":"http://iweb.dl.sourceforge.net/project/vagrantarchlinx/2011.08.19/archlinux_2011.08.19.box",
"Arch Linux x64 (2013-08-17)":"http://vagrant.srijn.net/archlinux-x64-2013-08-17.box",
"Archlinux 2013-08-09":"https://downloads.sourceforge.net/project/vagrant-archlinux/vagrant-archlinux.box",
"Arch Linux_2013.11 x64 (vanilla)":"https://dl.dropboxusercontent.com/u/6750592/Arch_Linux_2013.11_x64.box",
"CentOS 5.6 32":"http://yum.mnxsolutions.com/vagrant/centos_56_32.box",
"CentOS 5.6 64 Packages (puppet 2.6.10 &amp; chef 0.10.6 from RPM, VirtualBox 4.2.0)":"https://dl.dropbox.com/u/7196/vagrant/CentOS-56-x64-packages-puppet-2.6.10-chef-0.10.6.box",
"CentOS 5.8 x86_64":"https://dl.dropbox.com/u/17738575/CentOS-5.8-x86_64.box",
"CentOS 5.8 x86_64 minimal + guest additions, puppet, chef":"http://tag1consulting.com/files/centos-5.8-x86-64-minimal.box",
"CentOS 5.9 x86_64 minimal + guest additions, puppet, chef":"http://tag1consulting.com/files/centos-5.9-x86-64-minimal.box",
"CentOS 5.10 x86_64 Base, VMware Tools, Chef 11.6 (Omnibus), Puppet 3.3.2 (Vendor repo)":"https://dl.dropboxusercontent.com/s/r5okkx8330h3tzh/vagrant-centos-5.10-x86_64.box",
"CentOS 6.2 32bit (puppet)":"https://dl.dropbox.com/sh/9rldlpj3cmdtntc/56JW-DSK35/centos-62-32bit-puppet.box",
"CentOS 6.3 32bit (puppet)":"https://dl.dropbox.com/sh/9rldlpj3cmdtntc/chqwU6EYaZ/centos-63-32bit-puppet.box",
"CentOS 6.3 x86_64 + Chef 10.14.2 + VirtualBox 4.1.22 (with guest additions)":"https://s3.amazonaws.com/itmat-public/centos-6.3-chef-10.14.2.box",
"CentOS 6.3 x86_64 minimal":"https://dl.dropbox.com/u/7225008/Vagrant/CentOS-6.3-x86_64-minimal.box",
"CentOS 6.4 x86_64 ":"https://github.com/2creatives/vagrant-centos/releases/download/v0.1.0/centos64-x86_64-20131030.box",
"CentOS 6.4 x86_64 2013-07-01 -- With development tools (gcc, etc...). Works on VBox 4.2.14!":"http://shonky.info/centos64.box",
"CentOS 6.4 i386 Minimal (VirtualBox Guest Additions 4.2.16, Chef 11.6.0, Puppet 3.2.3)":"http://developer.nrel.gov/downloads/vagrant-boxes/CentOS-6.4-i386-v20130731.box",
"CentOS 6.4 x86_64 Minimal (VirtualBox Guest Additions 4.2.16, Chef 11.6.0, Puppet 3.2.3)":"http://developer.nrel.gov/downloads/vagrant-boxes/CentOS-6.4-x86_64-v20130731.box",
"CentOS 6.4 x86_64 Minimal VMware Fusion (VMware Tools, Chef 11.4.0, Puppet 3.1.1)":"https://dl.dropbox.com/u/5721940/vagrant-boxes/vagrant-centos-6.4-x86_64-vmware_fusion.box",
"CentOS 6.5 x86_64 ":"https://github.com/2creatives/vagrant-centos/releases/download/v6.5.1/centos65-x86_64-20131205.box",
"CentOS 6.4 amd64 for vagrant-lxc with Puppet 3.3.1":"https://dl.dropboxusercontent.com/s/eukkxp5mp2l5h53/lxc-centos6.4-2013-10-24.box",
"CentOS 6.5 amd64 for vagrant-lxc with Puppet 3.3.2":"https://dl.dropboxusercontent.com/s/x1085661891dhkz/lxc-centos6.5-2013-12-02.box",
"Debian 6 Squeeze x64 configured according to documentation":"http://www.emken.biz/vagrant-boxes/debsqueeze64.box",
"Debian squeeze 32":"http://mathie-vagrant-boxes.s3.amazonaws.com/debian_squeeze_32.box",
"Debian Squeeze 6.0.6 32 - Vanilla (No Ruby, no puppet, only Chef 10.14 from omnibus installer)":"https://dl.dropbox.com/u/2289657/squeeze32-vanilla.box",
"Debian squeeze 64 (French (Swiss) keyboard layout)":"http://dl.dropbox.com/u/937870/VMs/squeeze64.box",
"Debian Squeeze amd64 (with Puppet, Chef and VirtualBox 4.2.1)":"http://f.willianfernandes.com.br/vagrant-boxes/DebianSqueeze64.box",
"Debian Squeeze amd64 (with VirtualBox 4.2.4)":"http://dl.dropbox.com/u/54390273/vagrantboxes/Squeeze64_VirtualBox4.2.4.box",
"Debian Squeeze amd64 (Chef 10.24.4, Puppet 3.1.1, VirtualBox 4.2.12)":"https://dl.dropboxusercontent.com/u/13054557/vagrant_boxes/debian-squeeze.box",
"Debian Squeeze i386 6.0.7 (Chef 10.18.2, Puppet 2.6.2, VirtualBox 4.2.6, nfs-common 1.2.2)":"http://dl.dropbox.com/u/40989391/vagrant-boxes/debian-squeeze-i386.box",
"Debian Squeeze 6.0.7 amd64 (french) with Puppet 3.1.1, Chef 11.4.0 and VirtualBox 4.2.12, built with Veewee 0.3.7 (2013/04/20)":"http://public.sphax3d.org/vagrant/squeeze64.box",
"Debian Squeeze 6.0.8 amd64 (Chef 11.8.0, VMware tools)":"http://shopify-vagrant.s3.amazonaws.com/debian-6.0.8_vmware.box",
"Debian Squeeze amd64 (Puppet 3.2.3, LXC, 2013.07.27)":"https://dl.dropboxusercontent.com/u/67225617/lxc-vagrant/lxc-squeeze64-puppet3-2013-07-27.box",
"Debian Wheezy amd64 (Puppet 3.2.3, LXC, 2013.07.27)":"https://dl.dropboxusercontent.com/u/67225617/lxc-vagrant/lxc-wheezy64-puppet3-2013-07-27.box",
"Debian Wheezy amd64 (Puppet, VirtualBox)":"https://dl.dropboxusercontent.com/u/86066173/debian-wheezy.box",
"Debian Wheezy 7.1 amd64 (french) with Chef 11.4.4 and VirtualBox 4.1.18 (2013/06/19)":"http://downloads.shadoware.org/wheezy64.box",
"Debian Wheezy 7.2 amd64 (VirtualBox Guest Additions 4.3.0) (2013/10/19)":"https://dl.dropboxusercontent.com/u/197673519/debian-7.2.0.box",
"Debian Wheezy 7.2 amd64 (VirtualBox Guest Additions 4.3.0":"https://dl.dropboxusercontent.com/s/odnew2tnliqft9o/debian7-openresty.box",
"Debian Wheezy 7.0 amd64 (Minimal Install + Puppet)":"https://www.dropbox.com/s/23gupgb0xompvkm/Wheezy64.box?dl=1",
"Debian Wheezy 7.0 amd64 (British) Puppet 3.2.1, Chef 11.4.4":"http://vagrantboxes.footballradar.com/wheezy64.box",
"Debian Wheezy 7.0 amd64 - Vanilla (No Ruby, no puppet, no Chef)":"https://dl.dropboxusercontent.com/s/xymcvez85i29lym/vagrant-debian-wheezy64.box",
"Debian Wheezy (7.0.0) amd64, no Ruby/Puppet/Chef, VirtualBox 4.2.4, built with Veewee 0.3.7 (2013/06/12)":"https://www.dropbox.com/s/gxouugzbnjlny1k/debian-7.0-amd64-minimal.box",
"Debian Wheezy (7.0.0) amd64, with Ruby 1.9.1, Puppet 3.2.1, Chef 11.4.4, VirtualBox 4.2.4, built with Veewee 0.3.7 (2013/06/12)":"https://www.dropbox.com/s/si19tbftilcuipz/debian-7.0-amd64.box",
"Debian Wheezy i386 minimal from grml-debootstrap, italian layout, w/ guest additions (2013/10/23)":"http://tools.swergroup.com/downloads/wheezy32.box",
"Fedora 18 x86 Minimal (with Chef 11.4.0, VirtualBox Guest Additions 4.2.10 and rpmfusion enabled); md5sum 36b8aaf49421510a726b6175ee44e15b sha1sum d5a6a3c4ab1538105b18e6efba4d9479798a430e":"http://static.stasiak.at/fedora-18-x86-2.box",
"Fedora 19 x86_64 (Puppet, VirtualBox)":"https://dl.dropboxusercontent.com/u/86066173/fedora-19.box",
"FreeBSD 9.2 x86_64 Minimal (VirtualBox, ZFS)":"https://wunki.org/files/freebsd-9.2-amd64-wunki.box",
"FreeBSD 9.2 i386 (UFS, VirtualBox Guest Additions 4.2.18, pkgng enabled, Python 2.7) ":"http://iris.hosting.lv/freebsd-9.2-i386.box",
"Gentoo 2013.02.14 i686 (32bit) (Puppet, Chef, VirtualBox 4.2.6)":"https://seedrs.box.com/shared/static/6cg94mkdtuz3baoy8zl8.box",
"Gentoo 2013.05 amd64 (Chef omnibus 11.4.4, VirtualBox 4.2.12)":"https://lxmx-vm.s3.amazonaws.com/vagrant/boxes/lxmx_gentoo-2013.05_chef-11.4.4.box",
"Gentoo 2013.10.24 amd64 (chef, puppet) on 2013.10.30 ":"https://dl.dropboxusercontent.com/s/qubuaqiizvfpsyx/gentoo-20131024-amd64.box",
"Gentoo 2013.10.24 amd64 minimal on 2013.10.30":"https://dl.dropboxusercontent.com/s/mfurnvstqoj8w47/gentoo-20131024-amd64-minimal.box",
"Gentoo 2013.10.29 i686 (chef, puppet) on 2013.10.30":"https://dl.dropboxusercontent.com/s/xfl63k64zliixid/gentoo-20131029-i686.box",
"Gentoo 2013.10.29 amd64 minimal on 2013.10.30":"https://dl.dropboxusercontent.com/s/0e23qmbo97wb5x2/gentoo-20131029-i686-minimal.box",
"Funtoo 2013.06 amd64 (Chef omnibus 11.4.4, VirtualBox 4.2.12)":"https://lxmx-vm.s3.amazonaws.com/vagrant/boxes/lxmx_funtoo-2013.06_chef-11.4.4.box",
"Heroku Celadon Cedar":"http://dl.dropbox.com/u/1906634/heroku.box",
"Kali Linux":"http://ftp.sliim-projects.eu/boxes/kali-linux-1.0-amd64.box",
"Kali Linux 1.0 i686":"http://dalvik.jp/vagrant/KaliLinux-1.0-en-i686.box",
"Minimal CentOS 5.6":"http://dl.dropbox.com/u/9227672/centos-5.6-x86_64-netinstall-4.1.6.box",
"Minimal CentOS 6.0":"http://dl.dropbox.com/u/9227672/CentOS-6.0-x86_64-netboot-4.1.6.box",
"CentOS 6.3 32bit (Ruby 1.8.7 &amp; Chef 10.14.2)":"http://tom.davidson.me.uk/dev/vagrant/centos63-32.box",
"Official Ubuntu 12.04 daily Cloud Image amd64 (VirtualBox 4.1.12)":"http://cloud-images.ubuntu.com/vagrant/precise/current/precise-server-cloudimg-amd64-vagrant-disk1.box",
"Official Ubuntu 12.04 daily Cloud Image i386 (VirtualBox 4.1.12)":"http://cloud-images.ubuntu.com/vagrant/precise/current/precise-server-cloudimg-i386-vagrant-disk1.box",
"Official Ubuntu 12.10 daily Cloud Image amd64 (No Guest Additions)":"http://cloud-images.ubuntu.com/vagrant/quantal/current/quantal-server-cloudimg-amd64-vagrant-disk1.box",
"Official Ubuntu 12.10 daily Cloud Image i386 (No Guest Additions)":"http://cloud-images.ubuntu.com/vagrant/quantal/current/quantal-server-cloudimg-i386-vagrant-disk1.box",
"Official Ubuntu 13.04 daily Cloud Image amd64 (No Guest Additions)":"http://cloud-images.ubuntu.com/vagrant/raring/current/raring-server-cloudimg-amd64-vagrant-disk1.box",
"Official Ubuntu 13.04 daily Cloud Image i386 (No Guest Additions)":"http://cloud-images.ubuntu.com/vagrant/raring/current/raring-server-cloudimg-i386-vagrant-disk1.box",
"Official Ubuntu 13.10 daily Cloud Image amd64 (Development release, No Guest Additions)":"http://cloud-images.ubuntu.com/vagrant/saucy/current/saucy-server-cloudimg-amd64-vagrant-disk1.box",
"Ubuntu 13.10 amd64 for VMWare (with Chef, ruby1.9.3 and vmware-tools)":"http://brennovich.s3.amazonaws.com/saucy64_vmware_fusion.box",
"Ubuntu Server 13.10 amd64 (Chef 11.8.0, VMware tools)":"http://shopify-vagrant.s3.amazonaws.com/ubuntu-13.10_vmware.box",
"Official Ubuntu 13.10 daily Cloud Image i386 (Development release, No Guest Additions)":"http://cloud-images.ubuntu.com/vagrant/saucy/current/saucy-server-cloudimg-i386-vagrant-disk1.box",
"Ubuntu 13.04 amd64 for vagrant-lxc with Puppet 3.1.1":"http://dl.dropbox.com/u/13510779/lxc-raring-amd64-2013-07-12.box",
"Ubuntu 12.10 amd64 for vagrant-lxc with Puppet 3.1.1":"http://dl.dropbox.com/u/13510779/lxc-quantal-amd64-2013-07-12.box",
"Ubuntu 12.04 amd64 for vagrant-lxc with Puppet 3.1.1":"http://dl.dropbox.com/u/13510779/lxc-precise-amd64-2013-07-12.box",
"Ubuntu 12.04 amd64 for with raring kernel and docker 0.6.4":"http://bit.ly/dockerprecise64",
"Ubuntu Raring Ringtail (13.04) i386 Minimal (minimal = rvm, ruby-2.0.0p247, gem, chef, puppet)":"https://dl.dropboxusercontent.com/u/4387941/vagrant-boxes/ubuntu-13.04-mini-i386.box",
"OmniOS (r151002)":"http://omnios.omniti.com/media/omnios-latest.box",
"OpenBSD 5.2 (amd64) puppet chef pkg ports":"https://dl.dropbox.com/s/5ietqc3thdholuh/openbsd-52-64.box",
"OpenBSD 5.0 (amd64) puppet chef pkg ports":"https://github.com/downloads/stefancocora/openbsd_amd64-vagrant/openbsd50_amd64.box",
"OpenBSD 5.0 (i386) puppet chef pkg ports":"https://github.com/downloads/stefancocora/openbsd_i386-vagrant/openbsd50_i386.box",
"openSUSE 12.1 x64":"https://github.com/jtperry/OpenSuseVagrantBox",
"openSUSE 12.3 (x64) puppet chef ":"http://bit.ly/openSUSE-12-3-virtualbox-box",
"OpenSuse 12.2 x86 (puppet)":"http://sourceforge.net/projects/opensusevagrant/files/12.2/opensuse-12.2-32.box/download",
"OpenSuse 12.2 x86_64 (puppet)":"http://sourceforge.net/projects/opensusevagrant/files/12.2/opensuse-12.2-64.box/download",
"OpenSuse 12.3 x86 (puppet)":"http://sourceforge.net/projects/opensusevagrant/files/12.3/opensuse-12.3-32.box/download",
"OpenSuse 12.3 x86_64 (puppet)":"http://sourceforge.net/projects/opensusevagrant/files/12.3/opensuse-12.3-64.box/download",
"Opscode centos 5":"http://opscode-vagrant-boxes.s3.amazonaws.com/centos5-gems.box",
"Opscode ubuntu 10.04":"http://opscode-vagrant-boxes.s3.amazonaws.com/ubuntu10.04-gems.box",
"Oracle Linux 5.9 x86_64 (Chef + Puppet)":"https://dl.dropbox.com/s/n5o3gfdgjc3ekhl/oracle59.box",
"Oracle Linux 5.9 i386 VBox 4.2.16 puppet chef":"https://dl.dropbox.com/sh/yim9oyqajopoiqs/kXejEiEBAO/oracle59-32.box",
"Oracle Linux 5.9 x86_64 VBox 4.2.16 puppet chef":"https://dl.dropbox.com/sh/yim9oyqajopoiqs/hMiT_SsOYx/oracle59-64.box",
"Oracle Linux 5.10 x86_64 (Chef + Puppet)":"https://dl.dropbox.com/s/wsib87iudbzl56a/oraclelinux-5-x86_64.box",
"Oracle Linux 6.4 x86_64 (Chef + Puppet)":"https://dl.dropbox.com/s/zmitpteca72sjpx/oracle64.box",
"Oracle Linux 6.4 i386 VBox 4.2.16 puppet chef":"https://dl.dropbox.com/sh/yim9oyqajopoiqs/cx4lB6NnZU/oracle64-32.box",
"Oracle Linux 6.4 x86_64 VBox 4.2.16 puppet chef":"https://dl.dropbox.com/sh/yim9oyqajopoiqs/G-XIEmQJMb/oracle64-64.box",
"Oracle Linux 6.5 x86_64 (Chef + Puppet)":"https://dl.dropbox.com/s/613uhl43ekqzami/oraclelinux-6-x86_64.box",
"Puppetlabs CentOS 5.9 x86_64, VBox 4.2.10":"http://puppet-vagrant-boxes.puppetlabs.com/centos-59-x64-vbox4210.box",
"Puppetlabs CentOS 5.9 x86_64, VBox 4.2.10, No Puppet or Chef":"http://puppet-vagrant-boxes.puppetlabs.com/centos-59-x64-vbox4210-nocm.box",
"Puppetlabs CentOS 6.4 x86_64, VBox 4.2.10":"http://puppet-vagrant-boxes.puppetlabs.com/centos-64-x64-vbox4210.box",
"Puppetlabs CentOS 6.4 x86_64, VBox 4.2.10, No Puppet or Chef":"http://puppet-vagrant-boxes.puppetlabs.com/centos-64-x64-vbox4210-nocm.box",
"Puppetlabs Debian 6.0.7 x86_64, VBox 4.2.10":"http://puppet-vagrant-boxes.puppetlabs.com/debian-607-x64-vbox4210.box",
"Puppetlabs Debian 6.0.7 x86_64, VBox 4.2.10, No Puppet or Chef":"http://puppet-vagrant-boxes.puppetlabs.com/debian-607-x64-vbox4210-nocm.box",
"Puppetlabs Debian 7.0rc1 x86_64, VBox 4.2.10":"http://puppet-vagrant-boxes.puppetlabs.com/debian-70rc1-x64-vbox4210.box",
"Puppetlabs Debian 7.0rc1 x86_64, VBox 4.2.10, No Puppet or Chef":"http://puppet-vagrant-boxes.puppetlabs.com/debian-70rc1-x64-vbox4210-nocm.box",
"Puppetlabs Fedora 18 x86_64, VBox 4.2.10":"http://puppet-vagrant-boxes.puppetlabs.com/fedora-18-x64-vbox4210.box",
"Puppetlabs Fedora 18 x86_64, VBox 4.2.10, No Puppet or Chef":"http://puppet-vagrant-boxes.puppetlabs.com/fedora-18-x64-vbox4210-nocm.box",
"Puppetlabs SLES 11sp1 x86_64, VBox 4.2.10":"http://puppet-vagrant-boxes.puppetlabs.com/sles-11sp1-x64-vbox4210.box",
"Puppetlabs SLES 11sp1 x86_64, VBox 4.2.10, No Puppet or Chef":"http://puppet-vagrant-boxes.puppetlabs.com/sles-11sp1-x64-vbox4210-nocm.box",
"Puppetlabs Ubuntu 10.04.4 x86_64, VBox 4.2.10":"http://puppet-vagrant-boxes.puppetlabs.com/ubuntu-server-10044-x64-vbox4210.box",
"Puppetlabs Ubuntu 10.04.4 x86_64, VBox 4.2.10, No Puppet or Chef":"http://puppet-vagrant-boxes.puppetlabs.com/ubuntu-server-10044-x64-vbox4210-nocm.box",
"Puppetlabs Ubuntu 12.04.2 x86_64, VBox 4.2.10":"http://puppet-vagrant-boxes.puppetlabs.com/ubuntu-server-12042-x64-vbox4210.box",
"Puppetlabs Ubuntu 12.04.2 x86_64, VBox 4.2.10, No Puppet or Chef":"http://puppet-vagrant-boxes.puppetlabs.com/ubuntu-server-12042-x64-vbox4210-nocm.box",
"Scientific Linux 6 64 chefclient0.10":"http://download.frameos.org/sl6-64-chefclient-0.10.box",
"Scientific Linux 6 64 chefserver-0.10":"http://download.frameos.org/sl6-64-chefserver-0.10.box",
"Scientific Linux 6 64 minimal":"http://lyte.id.au/vagrant/sl6-64-lyte.box",
"Severalnines ClusterControl, Database Cluster Deployment Scripts, VBox 4.2.10, Ubuntu 12.04 LTS":"https://googledrive.com/host/0B-J3zLLFd9HMLUhkckZBWi1xVlE/s9s_clustercontrol.box",
"Slackware 13.37":"http://dl.dropbox.com/u/10544201/slackware-13.37.box",
"Ubuntu 10.04.4 LTS Lucid x86_64 (Apache 2.2.14, PHP 5.3.2, MySQL 5.1.66)":"https://dl.dropbox.com/u/14741389/vagrantboxes/lucid64-lamp.box",
"Ubuntu 11.04 server amd64":"http://dl.dropbox.com/u/7490647/talifun-ubuntu-11.04-server-amd64.box",
"Ubuntu 11.04 server i386":"http://dl.dropbox.com/u/7490647/talifun-ubuntu-11.04-server-i386.box",
"Ubuntu 12.04.1 LTS x86_64 (Guest Additions 4.1.18)":"http://dl.dropbox.com/u/1537815/precise64.box",
"Ubuntu 12.04.2 Server i386 with VirtualBox Guest Additions v4.2.6, Chef Omnibus 11":"http://grahamc.com/vagrant/ubuntu-12.04.2-i386-chef-11-omnibus.box",
"Ubuntu 12.04.2 Server amd64 for VMWare Fusion and Chef Omnibus 11":"http://grahamc.com/vagrant/ubuntu-12.04.2-server-amd64-vmware-fusion.box",
"Ubuntu 12.10 Quantal x86_64 (Guest Additions 4.2.2)":"https://github.com/downloads/roderik/VagrantQuantal64Box/quantal64.box",
"Ubuntu lucid 32":"http://files.vagrantup.com/lucid32.box",
"Ubuntu lucid 64":"http://files.vagrantup.com/lucid64.box",
"Ubuntu Lucid32 lampp, mongodb, git":"http://www.hitarthindia.com/VM/lampp-mongo-git.box",
"Ubuntu Lucid32 lampp, mongodb, git, lithium, rockmongo":"http://www.hitarthindia.com/VM/lampp-mongo-git-lithium-rock.box",
"Ubuntu Maverick 64":"http://mathie-vagrant-boxes.s3.amazonaws.com/maverick64.box",
"Ubuntu precise 32 VirtualBox":"http://files.vagrantup.com/precise32.box",
"Ubuntu precise 64 VirtualBox":"http://files.vagrantup.com/precise64.box",
"Ubuntu precise 64 VMWare":"http://files.vagrantup.com/precise64_vmware.box",
"Ubuntu raring 64 VMWare":"https://s3.amazonaws.com/life360-vagrant/raring64.box",
"Ubuntu precise 64 (Ruby 1.9.3 &amp; Chef 10.12)":"https://dl.dropbox.com/u/14292474/vagrantboxes/precise64-ruby-1.9.3-p194.box",
"Ubuntu precise 64 with some perl dependencies and few other essentials":"https://dl.dropbox.com/u/5595111/precise64-kohadeps.box",
"Ubuntu Server 12.04 amd64 (with Puppet, Chef and VirtualBox 4.2.1)":"http://goo.gl/8kWkm",
"Ubuntu Server 12.04.1 i868 (VirtualBox 4.2.1)":"http://dl.dropbox.com/u/4031118/Vagrant/ubuntu-12.04.1-server-i686-virtual.box",
"Ubuntu 12.04.2 AMD64 (Chef 11 installed via Omnibus; VirtualBox 4.2.6; Standard Puppet)":"http://grahamc.com/vagrant/ubuntu-12.04-omnibus-chef.box",
"Ubuntu Server 12.10 amd64 Minimal (VirtualBox 4.2.6)":"http://goo.gl/wxdwM",
"Ubuntu Raring 32 (13.04) Vanilla":"http://goo.gl/y79mW",
"Ubuntu Raring 64 (13.04) Vanilla":"http://goo.gl/ceHWg",
"Ubuntu Server raring 13.04 amd64  (ruby 1.9.3, puppet, guest additions)":"https://dl.dropboxusercontent.com/u/547671/thinkstack-raring64.box",
"Ubuntu Server raring 13.04 amd64 (ruby-2.0.0-247 only)  MySQL headers already included for building mysql2 extension":"https://dl.dropboxusercontent.com/s/o5i10hcu57jamg8/ubuntu64-ruby2.box",
"Ubuntu Server 13.04 x64 Raring Ringtail (VirtualBox Guest Additions 4.2.12, Chef 11.4.4, Puppet 2.7.18)":"http://goo.gl/Y4aRr",
"Ubuntu Server Precise 12.04.3 amd64  Kernel is ready for Docker (Docker not included)":"http://nitron-vagrant.s3-website-us-east-1.amazonaws.com/vagrant_ubuntu_12.04.3_amd64_vmware.box",
"Ubuntu Server Precise 12.04.3 amd64  Kernel is ready for Docker (Docker not included)":"http://nitron-vagrant.s3-website-us-east-1.amazonaws.com/vagrant_ubuntu_12.04.3_amd64_virtualbox.box",
"Ubuntu Server Precise 12.04.3 amd64":"https://oss-binaries.phusionpassenger.com/vagrant/boxes/ubuntu-12.04.3-amd64-vmwarefusion.box",
"Ubuntu Server Precise 12.04.3 amd64":"https://oss-binaries.phusionpassenger.com/vagrant/boxes/ubuntu-12.04.3-amd64-vbox.box",
"Ubuntu Server Precise 12.04 amd64 (Chef 11.8.0, VMware Tools)":"http://shopify-vagrant.s3.amazonaws.com/ubuntu-12.04_vmware.box",
"Openmandriva2013.0 x86_64 (LXC, 2013.10.21)":"http://bit.ly/vagrant-lxc-openmandriva2013-0-x86_64-2013-10-21"
 };

});