.PHONY:all

chrome:=chromium
dir:=BildUmschalten
keyfile=$(dir)/key.pem

all:
	if [ -r $(keyfile) ]; then \
		$(chrome) --pack-extension=$(dir) --pack-extension-key=$(keyfile) ; \
	else \
		$(chrome) --pack-extension=$(dir) ; \
	fi
