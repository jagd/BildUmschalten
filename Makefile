.PHONY:all

chrome:=chromium
keyfile:=BildUmschalten.pem

all:
	if [ -r $(keyfile) ]; then \
		$(chrome) --pack-extension=BildUmschalten/ --pack-extension-key=$(keyfile) ; \
	else \
		$(chrome) --pack-extension=BildUmschalten/ ; \
	fi
