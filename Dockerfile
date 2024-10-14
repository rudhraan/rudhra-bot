FROM quay.io/princerudh/rudhra:latest
RUN git clone https://github.com/rudhaan/rudhra-bot /root/rudhra/
WORKDIR /root/rudhra/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
