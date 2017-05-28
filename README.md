# getting this billtracker-flask repo up & running

1. install docker

   - https://docs.docker.com/docker-for-mac/install/

   - https://docs.docker.com/docker-for-windows/install/

   - https://docs.docker.com/engine/installation/linux/ubuntu/

    _Note about linux installs:_

      - `docker-compose` _is not installed by default. Install it [here](https://github.com/docker/compose/releases)._ Also you must log out and log back in to use docker without sudo permissions (see [here](https://docs.docker.com/engine/installation/linux/linux-postinstall/) for details).

2. run docker
3. `cd billtracker-flask`
4. run `make`
5. in your browser, go to localhost:5000

That should be it, but let me know if it gives you any problems!  I can
walk you through any pain points.
