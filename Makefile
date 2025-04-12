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

${DIR}:${DIR}/dist
${DIR}/dist:$(addprefix ${DIR}/dist/edge-pulsar-website/browser/,index.html .htaccess) ${DIR}/dist/etc

${DIR}/dist/%/index.html:$(wildcard ${DIR}/*.json) $(shell find ${DIR}/src/ -type f -not -name '.*' | sed 's/ /\\ /g')
	mkdir -p $(dir $(@D))
	cd $(dir $(@D)) && npm ci && npm run build

${DIR}/dist/%/.htaccess: ${DIR}/src/.htaccess
	mkdir -p $(dir $(@D))
	cp $< $@

%/dist/etc:%/etc
	${RM} -r $@
	cp -r $< $(dir $@)

.PHONY:${MODULE}_clean

override DIRS:=$(subst ${DIR} ,,${DIRS})
override DIR:=$(firstword $(DIRS))
override MODULE:=$(notdir ${DIR})
