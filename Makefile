override DIRS:=$(abspath $(dir $(lastword ${MAKEFILE_LIST}))) ${DIRS}
override DIR:=$(patsubst %/,%,$(firstword ${DIRS}))
override MODULE:=$(notdir ${DIR})

all::${MODULE}_all
clean::${MODULE}_clean
compile::${MODULE}_compile
run::${MODULE}_run

${MODULE}_PKG:=${DIR}/Dockerfile \
	${DIR}/dist \

${MODULE}_all:${MODULE}_compile
${MODULE}_compile:${DIR}

${MODULE}_clean:DIR:=${DIR}
${MODULE}_clean:
	rm -rf ${DIR}/dist

${MODULE}_run:
	npm run start

${MODULE}_OUTPUT=${DIR}/dist/edge-pulsar-website/browser

${DIR}:${DIR}/dist
${DIR}/dist:$(addprefix ${${MODULE}_OUTPUT}/,index.html .htaccess actions)

${DIR}/dist/%/index.html:$(wildcard ${DIR}/*.json) $(shell find ${DIR}/src/ -type f -not -name '.*' | sed 's/ /\\ /g')
	mkdir -p $(dir $(@D))
	cd $(dir $(@D)) && npm ci && npm run build

${DIR}/dist/%/.htaccess: ${DIR}/src/.htaccess
	mkdir -p $(dir $(@D))
	cp $< $@

${${MODULE}_OUTPUT}/%:${DIR}/%
	${RM} -r $@
	cp -r $< $(dir $@)

${MODULE}_sync:${${MODULE}_OUTPUT}
ifneq (${TARGET},)
	sed -e 's@<base href="/">@<base href="$(patsubst www/%,/%/www/,${TARGET})">@' -i $</index.html
endif
	echo 'cd /home/edgepub/${TARGET} \
	put -pR $< \
	rename www www-$(shell date -Is).old \
	rename $(notdir $<) www \
	ls \
	' | sftp edgepub@ftp.cluster021.hosting.ovh.net

.PHONY:${MODULE}_clean

override DIRS:=$(subst ${DIR} ,,${DIRS})
override DIR:=$(firstword $(DIRS))
override MODULE:=$(notdir ${DIR})
