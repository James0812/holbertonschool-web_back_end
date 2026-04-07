#!/usr/bin/env python3
"""Module that defines an async generator."""

import asyncio
import random


async def async_generator():
    """Yield 10 random numbers after 1 second delay each time."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
