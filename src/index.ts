import * as core from '@actions/core';
import * as path from 'path';
import { setupRenPy } from './setup-renpy';

async function run(): Promise<void> {
  try {
    const version = core.getInput('renpy-version', { required: true });
    const installPath = await setupRenPy(version);
    core.setOutput('launcher', path.join(installPath, 'launcher'));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
