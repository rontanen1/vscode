import requests
import time
from loguru import logger

for x in range(100):
    account = ["Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKbGJXRnBiQ0k2SW1obGVHRjRiM0pBWjIxaGFXd3VZMjl0SWl3aWJtRnRaU0k2SWtobGVHRWdXRzl5SWl3aWNHbGpkSFZ5WlNJNkltaDBkSEJ6T2k4dmJHZ3pMbWR2YjJkc1pYVnpaWEpqYjI1MFpXNTBMbU52YlM5aEwwRkJWRmhCU25oTE0wSnhWVGhrTkRVM01WWnNZMEpQWTJOeVJrTk1XbE4xWlVaUWIwMXlieTAwT1RGaFBYTTVOaTFqSWl3aVpHVjJhV05sVkhsd1pTSTZNeXdpWkdWMmFXTmxWRzlyWlc0aU9pSmxZekU0VVRkcGFGSlRTMWRQZWt0TVFtdFhRbWw2T2tGUVFUa3hZa2hhUzFBeVFtNTVWRWRMWVZGMmVWaFVZbmhETjJWdlEwOXFNMjF5WVc5Q2NqRnJlbk41U1VKV1ZuRldPWGhYTFU0MU0ycEdWRTVDWlRKbGVERjRRbXhmT0hORVdXSnpSalYwZVRGdFgzVnNiaTFwTVMwek9HRndiekZXUTBsSE9YWnVibVZoTTFCU09VVlVWRUp0YlZCM2J6aE9hSHBoYzA5VU5ERnljbk5STkZJek5YcHFJaXdpYVdGMElqb3hOalEyT0RBM01qYzJmUS5EOGFFNVBWLTdMMjczQThMazAzclNzSFJOZ1UzZVJRQ2lwSUxIRi1VQ0M0IiwiaWQiOiJzcW8zbnRIN3cxbkpmNWVoWFhDayIsImlhdCI6MTY0NjgwNzI3Nn0.Dbk1Q419EFQmW6c7IH_6BbBUUNvY6U09tlTgLuOsXgU,sqo3ntH7w1nJf5ehXXCk","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKbGJXRnBiQ0k2SW5KdmJubDBZVzUzWVc1QVoyMWhhV3d1WTI5dElpd2libUZ0WlNJNklqQXdNekFnWDFKdmJua2dWR0Z1SUVWdWQyRnVJaXdpY0dsamRIVnlaU0k2SW1oMGRIQnpPaTh2YkdnekxtZHZiMmRzWlhWelpYSmpiMjUwWlc1MExtTnZiUzloTFM5QlQyZ3hORWRuT0VsUWRrdEVObVJQUjJoZk9XTnhTMDk2ZGs5SVpHeEdZVk52TlZSVFEwOXdRa2hXVDFkblBYTTVOaTFqSWl3aVpHVjJhV05sVkhsd1pTSTZNeXdpWkdWMmFXTmxWRzlyWlc0aU9pSmtjakZYZEZaUE1sUnRiUzF0ZDAxNmExUkpVWFY0T2tGUVFUa3hZa1Y0U2toTlQza3pOR2RCYUhoVmIxTTRiblJEUXpZNGFXeFpSa0ZIVTJReE5YaHlNWGh1YldkS1dIQnJYekpLVGw5c1ZVNTNOV3B4VVZCaU9FTlZWa3hrVFdSVmRYQkJTamxLUVdKaVgzRk1RVmwwYTJkVU1EZFhWakl0Tms1SlNuSnlkVE5SVDFOMVJVdDJRV1k0TmxwdVEzVTVNelUyVFZWbVZWOUJjMEZ4WmxObWMyNHlJaXdpYVdGMElqb3hOalEyT0RFMU9EZzFmUS5DaVcwYzB1ME1Dcy1LSi0zZDh4SXFFSjhvNms0UFNhZDNJZzR6Z3BLcVNzIiwiaWQiOiI4OGh5ckJHSUFKbVBHbUczYUxwbyIsImlhdCI6MTY0NjgxNTg4NX0.jlYq3ujWiTNvEp43DSX1ryunQu8dTxUsdr2TwWlekbU,88hyrBGIAJmPGmG3aLpo","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKbGJXRnBiQ0k2SW5SaGJtWnZjblIxZVhWc01ERkFaMjFoYVd3dVkyOXRJaXdpYm1GdFpTSTZJbEp2Ym5rZ1ZHRnVJaXdpY0dsamRIVnlaU0k2SW1oMGRIQnpPaTh2YkdnekxtZHZiMmRzWlhWelpYSmpiMjUwWlc1MExtTnZiUzloTDBGQlZGaEJTbmhMU0VoNFNUTXRRako2Y2xadk1tWk1NR1o2ZVcxUlZqRTRkSE5EU0Uwd1VGcExYMlpyUFhNNU5pMWpJaXdpWkdWMmFXTmxWSGx3WlNJNk15d2laR1YyYVdObFZHOXJaVzRpT2lKalowcFlaazFRV0ZSUFpWWXlOMEkzTjFWU04waGlPa0ZRUVRreFlrVk5Oa1ZKVDJWaVlYTjVkbWRvVTBWcVprbFhXREpWVjFwTmNqaDVZVnBZY1VkSlFWODRWVlJXWWtjelRXbGliWE13ZEMweGRUZzNMVEpEYTFoVVgwMUZRbkp5VWxsaFJtdDZPVmRQYlRoTFdWcHFWbkJRZUVjNWFWcFZha1IyWkhBNFgySkZiVms1WW5SZmEwVnFaMDVmY1ROT1REa3ROamxaYlVKeVRESmlVVWxVZUhWUUlpd2lhV0YwSWpveE5qUTJPREUyT1RBemZRLnplYnhqRXdYb1ZmMFY5dHRIUUhUQ3gxeU9wWmJHeFlqQ1pYNFFXa01BSXciLCJpZCI6ImFlQ3QwbVROMXF0N0VtbXVDd1JDIiwiaWF0IjoxNjQ2ODE2OTAzfQ.gTaD4uB86qaP78yoTLPPxoOc0cWh3l4i9edPB3yX-n4,aeCt0mTN1qt7EmmuCwRC"]
    for i in range(0, len(account)) :
        addr = account[i]
        bearier = addr.split(",")[0]
        id = addr.split(",")[1]
        req = requests.Session()
        #bearier = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKbGJXRnBiQ0k2SW5SaGJtWnZjblIxZVhWc01ERkFaMjFoYVd3dVkyOXRJaXdpYm1GdFpTSTZJbEp2Ym5rZ1ZHRnVJaXdpY0dsamRIVnlaU0k2SW1oMGRIQnpPaTh2YkdnekxtZHZiMmRzWlhWelpYSmpiMjUwWlc1MExtTnZiUzloTDBGQlZGaEJTbmhMU0VoNFNUTXRRako2Y2xadk1tWk1NR1o2ZVcxUlZqRTRkSE5EU0Uwd1VGcExYMlpyUFhNNU5pMWpJaXdpWkdWMmFXTmxWSGx3WlNJNk15d2laR1YyYVdObFZHOXJaVzRpT2lKalowcFlaazFRV0ZSUFpWWXlOMEkzTjFWU04waGlPa0ZRUVRreFlrVk5Oa1ZKVDJWaVlYTjVkbWRvVTBWcVprbFhXREpWVjFwTmNqaDVZVnBZY1VkSlFWODRWVlJXWWtjelRXbGliWE13ZEMweGRUZzNMVEpEYTFoVVgwMUZRbkp5VWxsaFJtdDZPVmRQYlRoTFdWcHFWbkJRZUVjNWFWcFZha1IyWkhBNFgySkZiVms1WW5SZmEwVnFaMDVmY1ROT1REa3ROamxaYlVKeVRESmlVVWxVZUhWUUlpd2lhV0YwSWpveE5qUTJPREUyT1RBemZRLnplYnhqRXdYb1ZmMFY5dHRIUUhUQ3gxeU9wWmJHeFlqQ1pYNFFXa01BSXciLCJpZCI6ImFlQ3QwbVROMXF0N0VtbXVDd1JDIiwiaWF0IjoxNjQ2ODE2OTAzfQ.gTaD4uB86qaP78yoTLPPxoOc0cWh3l4i9edPB3yX-n4'
        #id = 'aeCt0mTN1qt7EmmuCwRC'
        headers = {
            'user-agent': 'Dart/2.16 (dart:io)',
            'content-type': 'application/json; charset=utf-8',
            'accept-encoding': 'gzip',
            'content-length': '29',
            'authorization': bearier,
            'host': 'us-central1-squid-456.cloudfunctions.net',
        }
        data = '{"id":"'+id+'"}'
        response = req.post('https://us-central1-squid-456.cloudfunctions.net/account/requestDailyReward', headers=headers, data=data)
        print(response.content)

        headers = {
            'user-agent': 'Dart/2.16 (dart:io)',
            'content-type': 'application/json',
            'accept-encoding': 'gzip',
            'content-length': '0',
            'authorization': bearier,
            'host': 'us-central1-squid-456.cloudfunctions.net',
        }

        response = req.post('https://us-central1-squid-456.cloudfunctions.net/tokenAdmin/requestExchangeReward', headers=headers)
        print(response.content)

        headers = {
            'user-agent': 'Dart/2.16 (dart:io)',
            'content-type': 'application/json; charset=utf-8',
            'accept-encoding': 'gzip',
            'content-length': '70',
            'authorization': bearier,
            'host': 'us-central1-squid-456.cloudfunctions.net',
        }

        data = '{"address":"0x1426F09eB3e8A3eA108C18F5CeaB22d5770D163e","amount":12000}'

        response = requests.post('https://us-central1-squid-456.cloudfunctions.net/token/transfer', headers=headers, data=data)
        print(response.content)
        #print(i)
    logger.info("WAITING 1 HOUR")
    logger.info(" ")
    time.sleep(3660)