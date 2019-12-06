import * as core from '@actions/core';
import * as io from '@actions/io';
import * as tc from '@actions/tool-cache';
import * as path from 'path';

export async function setupRenPy(version: string): Promise<string> {
  const url = `https://www.renpy.org/dl/${version}/renpy-${version}-sdk.zip`;
  console.log(`Download Ren'py SDK v${version} from ${url}`);
  const downloadPath = await tc.downloadTool(url);

  console.log(`Setup Ren'py SDK`);
  const extractDir = await core.group('Extract log', () => tc.extractZip(downloadPath));

  const installDir = path.join(__dirname, 'runner', 'bin');
  await io.mkdirP(installDir);
  const installPath = path.join(installDir, 'renpy');
  await io.mv(path.join(extractDir, `renpy-${version}-sdk`), installPath);
  core.addPath(installPath);
  return installPath;
}
